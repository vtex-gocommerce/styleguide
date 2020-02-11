import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import uniqid from 'uniqid'
import { default as ListTable } from './../../../../components/Data/Table'
import { default as TableTree } from './../../../../components/Data/TableTree'
import IconSearch from './../../../../icons/IconSearch'
import IconSortDown from './../../../../icons/IconSortDown'
import IconSortUp from './../../../../icons/IconSortUp'
import { ListTableTemplateConsumer } from './../../index'

class Table extends PureComponent {

  state = {
    updateTable: 0,
    rowsData: [],
    selected: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data, compareElements } = nextProps

    let needUpdate = false
    if (data.length !== prevState.rowsData.length) needUpdate = true

    const newRowsData = data.reduce((acc, currElement, currIndex) => {
      const rowElement = prevState.rowsData.find(rowElement => compareElements(rowElement, currElement))
      const rowIndex = prevState.rowsData.indexOf(rowElement)
      if (rowIndex === -1 || rowIndex !== currIndex) needUpdate = true
      if (rowElement) return [...acc, rowElement]
      const selectedElement = prevState.selected.find(selected => compareElements(selected, currElement))
      if (selectedElement) return [...acc, selectedElement]
      return [...acc, { ...currElement, ROW_ID: uniqid() }]
    }, [])

    if (!needUpdate) {
      return null
    }
    return {
      rowsData: newRowsData,
      updateTable: prevState.updateTable + 1
    }
  }

  handleOnSortClick = (value, label, sort, handleChangeOrderBy) => {
    const direction = !sort ? 'ASC' : sort.direction === 'ASC' ? 'DESC' : 'ASC'

    return (
      <div
        onClick={() =>
          handleChangeOrderBy({
            field: value,
            direction: direction
          })
        }
        className="c-primary pointer inline-flex justify-center items-center"
      >
        {label}{' '}
        {sort &&
          sort.field == value &&
          (direction === 'DESC' ? <IconSortUp className="g-ml2 g-f2" /> : <IconSortDown className="g-ml2 g-f2" />)}
      </div>
    )
  }

  parseColumns = (sort, handleChangeOrderBy) => {
    return this.props.tableConfig.columns.map(column => {
      if (column.sort) {
        return {
          ...column,
          label: this.handleOnSortClick(column.id, column.label, sort, handleChangeOrderBy)
        }
      }

      return { ...column, isCentered: !!column.isCentered }
    })
  }

  hasBgColor() {
    return this.props.tableConfig.options && this.props.tableConfig.options.bgColor
  }

  hasLineLink() {
    return this.props.tableConfig.options && this.props.tableConfig.options.cellWrapperProps
  }

  hasChildren() {
    return this.props.tableConfig.options && this.props.tableConfig.options.children
  }

  getChildren(item) {
    return this.props.tableConfig.options && this.props.tableConfig.options.children && this.props.tableConfig.options.children(item)
  }

  parseRows = (data, refetch) => {
    if (!data) return
    return data.map(item => {
      const row = this.props.tableConfig.columns.reduce((row, column) => {
        return {
          ...row,
          ...{
            [column.id]: column.row(item, {
              intl: this.props.intl,
              currencySpec: this.props.currencySpec,
              timezone: this.props.timezone,
              extraData: this.props.extraData,
              refetch
            }),
            ROW_ID: item.ROW_ID
          },
        }
      }, {})

      if (this.hasBgColor()) {
        row.bgColor = this.props.tableConfig.options.bgColor(item)
      }

      if (this.hasLineLink()) {
        row.cellWrapperProps = this.props.tableConfig.options.cellWrapperProps(item)
      }

      if (this.hasChildren()) {
        const children = this.getChildren(item)
        row.children = this.parseRows(children, refetch)
      }

      return row
    })
  }

  updateSelected = (selectedRows) => {
    const keepSelected = this.state.selected.filter(el => !this.state.rowsData.find(rowElement => rowElement.ROW_ID === el.ROW_ID))
    const newSelected = this.state.rowsData.filter(rowElement => selectedRows.find(el => el.ROW_ID === rowElement.ROW_ID))

    const updatedList = [...keepSelected, ...newSelected]
    this.setState({ selected: updatedList })

    // Remove ROW_ID before sending it back
    this.props.onChange(updatedList.reduce((acc, currElement) => {
      const element = Object.assign({}, currElement)
      delete element.ROW_ID
      return [...acc, element]
    }, []))
  }

  renderTable = (rows, columns, startSelected) => {
    const { isLoading, selectable, actions, onChange, multilevel, placeholderSize, data } = this.props

    if (multilevel) {
      return (
        <TableTree
          columns={columns}
          rows={rows}
          data={data}
          isLoading={isLoading}
          placeholderLength={rows.length || 5}
          selectable={selectable}
          actions={actions}
          onChange={onChange}
          multilevel={multilevel}
          placeholderSize={placeholderSize}
        />
      )
    }

    return (
      <ListTable
        key={this.state.updateTable}
        columns={columns}
        rows={rows}
        data={data}
        isLoading={isLoading}
        placeholderLength={rows.length || 5}
        selectable={selectable}
        startSelected={startSelected}
        actions={actions}
        onChange={(data) => {
          this.updateSelected(data)
        }}
        placeholderSize={placeholderSize}
      />
    )
  }

  render() {
    const { isLoading } = this.props

    return (
      <ListTableTemplateConsumer>
        {({ sort, handleChangeOrderBy }) => {

          const rows = this.parseRows(this.state.rowsData, handleChangeOrderBy)
          const columns = this.parseColumns(sort, handleChangeOrderBy)

          const startSelected = this.state.rowsData.reduce((acc, currValue, currIndex) => {
            if (this.state.selected.find(selected => selected.ROW_ID == currValue.ROW_ID)) return [...acc, currIndex]
            return [...acc]
          }, [])

          return (
            <React.Fragment>
              <div className="g-f2 overflow-x-auto">
                {this.renderTable(rows, columns, startSelected)}
              </div>
              {!isLoading && rows.length === 0 && (
                <div className="tc c-on-base-2 g-f6 fw6 g-pv12 bg-on-inverted bl br bb b--base-4 br--bottom br1">
                  <IconSearch width="40px" height="40px" />
                  <p className="g-mv3">
                    <FormattedMessage id="admin/styleguide.could-not-find-any-item" defaultMessage='Could not find any item' />
                  </p>
                  <p className="g-f2 normal">
                    <FormattedMessage id="admin/styleguide.try-using-another-filter-or-searching-for-a-less-specific-term" defaultMessage='Try using another filter or searching for a less specific term' />
                  </p>
                </div>
              )}
            </React.Fragment>
          )
        }}
      </ListTableTemplateConsumer>
    )
  }
}

Table.propTypes = {
  tableConfig: PropTypes.object,
  currencySpec: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  selectable: PropTypes.bool,
  compareElements: PropTypes.func,
  actions: PropTypes.node,
  onChange: PropTypes.func,
  extraData: PropTypes.object,
  placeholderSize: PropTypes.oneOf(['default', 'large']),
}

Table.defaultProps = {
  onChange: () => { },
  compareElements: (a, b) => JSON.stringify(a) === JSON.stringify(b),
  extraData: {},
  placeholderSize: 'default',
}
export default Table
