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
    const { columns, rows, selectable } = this.props

    return (
      <table className="ba b--navy-40 w-100" cellSpacing="0">
        <thead className="tl bg-navy-20">
          <tr>
            {selectable && (
              <th className="bb b--navy-40 pv4 ph4 tc" style={{ width: '40px' }}>
                <CheckBox onClick={this.selectAll} />
              </th>
            )}
            {columns.map(column => {
              return (
                <th
                  key={column.id}
                  className={`bb b--navy-40 pv4 ph4 navy-60 fw4 ${column.isCentered && 'tc'}`}
                  style={{ width: column.size + '%' }}
                >
                  {column.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="bg-white">
          {this.props.isLoading
            ? Array(3)
                .fill()
                .map(e => (
                  <tr key={e}>
                    {Array(this.props.columns.length)
                      .fill()
                      .map(e => (
                        <td key={e} className={`bb b--navy-40 pv5 ph4 navy tc`}>
                          <Placeholder className="h2 w-100 mt2 br4" isPlaceholderActive={this.props.isLoading} />
                        </td>
                      ))}
                  </tr>
                ))
            : rows.map((fields, index) => {
                const formatted_row = columns.map(column => {
                  return (
                    <td key={index + column.id} className={`bb b--navy-40 pv5 ph4 navy ${column.isCentered && 'tc'}`}>
                      <Placeholder className="h2 w-100 mt2 br4" isPlaceholderActive={false}>
                        {fields[column.id]}
                      </Placeholder>
                    </td>
                  )
                })

                return (
                  <tr key={index}>
                    {selectable && (
                      <th className="bb b--navy-40 ph4 tc" style={{ width: '40px' }}>
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
  onChange: PropTypes.func
}

Table.defaultProps = {
  selectable: false,
  isLoading: false,
  onChange: () => {}
}

export default Table
