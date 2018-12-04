import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import IconCaret from './../../../../icons/IconCaret'
import IconSearch from './../../../../icons/IconSearch'
import { default as ListTable } from './../../../../components/Data/Table'
import { ListTableTemplateConsumer } from './../../index'

class Table extends PureComponent {
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
        className="c-primary pointer inline-flex justify-center"
      >
        {label}{' '}
        {sort && sort.field == value && (
          <IconCaret side={direction === 'DESC' ? 'up' : 'down'} className="g-ml2 g-f2" />
        )}
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

  parseRows = refetch => {
    return this.props.data.map(item => {
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
            })
          }
        }
      }, {})

      if (this.hasBgColor()) {
        row.bgColor = this.props.tableConfig.options.bgColor(item)
      }

      if (this.hasLineLink()) {
        row.cellWrapperProps = this.props.tableConfig.options.cellWrapperProps(item)
      }

      return row
    })
  }

  render() {
    const { isLoading, selectable, actions, onChange } = this.props

    return (
      <ListTableTemplateConsumer>
        {({ sort, handleChangeOrderBy, isFiltered }) => {
          const rows = this.parseRows(handleChangeOrderBy)
          return (
            <React.Fragment>
              <div className="g-f2 overflow-x-auto">
                <ListTable
                  columns={this.parseColumns(sort, handleChangeOrderBy)}
                  rows={rows}
                  isLoading={isLoading}
                  placeholderLength={rows.length || 5}
                  selectable={selectable}
                  actions={actions}
                  onChange={onChange}
                />
              </div>
              {!isLoading && rows.length === 0 && (
                <div className="tc c-on-base-2 g-f6 fw6 g-pv12 bg-on-inverted bl br bb b--base-4 br--bottom br1">
                  <IconSearch width="40px" height="40px" />
                  <p className="g-mv3">
                    <FormattedMessage id="admin.oms.could-not-find-any-item" />
                  </p>
                  <p className="g-f2 normal">
                    <FormattedMessage id="admin.oms.try-using-another-filter-or-searching-for-a-less-specific-term" />
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
  actions: PropTypes.node,
  onChange: PropTypes.func,
  extraData: PropTypes.object
}

Table.defaultProps = {
  onChange: () => {},
  extraData: {}
}
export default Table
