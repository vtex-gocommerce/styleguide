import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Placeholder from '../../DataLoading/Placeholder'
import CheckBox from '../../Form/CheckBox'

class Table extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selectedList: []
    }
  }

  selectAll = checked => {
    let updatedList

    if (checked) {
      updatedList = [...Array(this.props.rows.length).keys()]
    } else {
      updatedList = []
    }

    const mapped = this.props.rows.filter((element, index) => {
      if (updatedList.includes(index)) {
        return element
      }
    })

    this.setState({ selectedList: updatedList })
    this.props.onChange(mapped)
  }

  select = (index, checked) => {
    let updatedList = this.state.selectedList

    if (checked) {
      updatedList.push(index)
    } else {
      var el = updatedList.indexOf(index)
      el != -1 && updatedList.splice(el, 1)
    }

    const mapped = this.props.rows.filter((element, index) => {
      if (updatedList.includes(index)) {
        return element
      }
    })

    this.setState({ selectedList: updatedList })
    this.props.onChange(mapped)
  }

  render() {
    const { columns, rows, selectable, placeholderLength } = this.props

    return (
      <table className={`w-100 ba b--base-4`} cellSpacing="0">
        <thead className={`tl bg-base-2`}>
          <tr>
            {selectable && (
              <th className={`g-pv3 g-ph4 tc bb b--base-4`} style={{ width: '40px' }}>
                <CheckBox onClick={this.selectAll} />
              </th>
            )}
            {columns.map((column, index) => {
              return (
                <th
                  key={column.id}
                  className={`g-pv3 g-ph4 c-on-base-2 fw4 g-f1 bb b--base-4 ${column && column.isCentered && 'tc'}`}
                  style={{ width: column.size + '%' }}
                >
                  {column.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="bg-base-1">
          {this.props.isLoading
            ? [...Array(placeholderLength).keys()].map(e => (
                <tr key={e}>
                  {[...Array(this.props.columns.length).keys()].map(e => (
                    <td key={e} className={`g-pv3 g-ph4 c-on-base-1 tc bb b--base-4`}>
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={this.props.isLoading} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((fields, index) => {
                const formatted_row = columns.map(column => {
                  return (
                    <td
                      key={index + column.id}
                      className={`g-pv3 g-ph4 c-on-base-1 bb b--base-4 ${column.isCentered && 'tc'}`}
                    >
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={false}>
                        {() => fields[column.id]}
                      </Placeholder>
                    </td>
                  )
                })

                return (
                  <tr
                    key={index}
                    className={`${fields.bgColor && 'bg-' + fields.bgColor} ${fields.lineLink && 'pointer'}`}
                    onClick={fields.lineLink && fields.lineLink}
                  >
                    {selectable && (
                      <th className="g-pv3 g-f1 tc bb b--base-4" style={{ width: '40px' }}>
                        <CheckBox
                          onClick={checked => this.select(index, checked)}
                          checked={this.state.selectedList.includes(index)}
                        />
                      </th>
                    )}
                    {formatted_row}
                  </tr>
                )
              })}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  /** Columns that will have on table. */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      /** ID of the column. */
      id: PropTypes.string.isRequired,
      /** Label of the column. */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      /** Size of the column in percentage. */
      size: PropTypes.number,
      /** Make the column centered. */
      isCentered: PropTypes.bool
    })
  ).isRequired,
  /** Rows that will be show on table. */
  rows: PropTypes.array.isRequired,
  /** Makes rows selectable. */
  selectable: PropTypes.bool,
  /** Is table in Loading State */
  isLoading: PropTypes.bool,

  placeholderLength: PropTypes.number,
  onChange: PropTypes.func
}

Table.defaultProps = {
  selectable: false,
  isLoading: false,
  placeholderLength: 3,
  onChange: () => {}
}

export default Table
