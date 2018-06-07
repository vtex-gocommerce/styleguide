import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Placeholder from './../../General/Placeholder'
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
    const { columns, rows, selectable, withoutStyle } = this.props

    return (
      <table className={`w-100 ${!withoutStyle && 'ba b--base-3'}`} cellSpacing="0">
        <thead className={`tl ${!withoutStyle && 'bg-base-2'}`}>
          <tr>
            {selectable && (
              <th className={`g-pv4 g-ph4 tc ${!withoutStyle && 'bb b--base-3'}`} style={{ width: '40px' }}>
                <CheckBox onClick={this.selectAll} />
              </th>
            )}
            {columns.map(column => {
              return (
                <th
                  key={column.id}
                  className={`g-pv4 g-ph4 c-on-base-2 fw4 ${!withoutStyle && 'bb b--base-3'} ${column.isCentered &&
                    'tc'}`}
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
            ? [...Array(3).keys()].map(e => (
                <tr key={e}>
                  {[...Array(this.props.columns.length).keys()].map(e => (
                    <td key={e} className={`g-pv5 g-ph4 c-on-base-1 tc ${!withoutStyle && 'bb b--base-3'}`}>
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
                      className={`g-pv5 g-ph4 c-on-base-1 ${!withoutStyle && 'bb b--base-3'} ${column.isCentered &&
                        'tc'}`}
                    >
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={false}>
                        {() => fields[column.id]}
                      </Placeholder>
                    </td>
                  )
                })

                return (
                  <tr key={index} className={`${fields.bgColor && 'bg-' + fields.bgColor}`}>
                    {selectable && (
                      <th className={`g-ph4 tc ${!withoutStyle && 'bb b--base-3'}`} style={{ width: '40px' }}>
                        <CheckBox
                          onClick={checked => this.select(index, checked)}
                          isChecked={this.state.selectedList.includes(index)}
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

  /** Remove border and header colors */
  withoutStyle: PropTypes.bool,
  onChange: PropTypes.func
}

Table.defaultProps = {
  selectable: false,
  isLoading: false,
  withoutStyle: false,
  onChange: () => {}
}

export default Table
