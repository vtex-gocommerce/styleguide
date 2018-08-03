import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Placeholder from '../../DataLoading/Placeholder'

const textAligns = {
  right: 'tr',
  left: 'tl',
  center: 'tc'
}

class TableList extends PureComponent {
  render() {
    const { columns, rows } = this.props
    const lastColumn = columns.length - 1

    return (
      <table className={`w-100`} cellSpacing="0">
        <thead>
          <tr>
            {columns.map((column, index) => {
              const textAlign = column.textAlign || 'left'
              return (
                <th
                  key={column.id}
                  className={`${index === 0 ? 'g-pl0' : 'g-pl4'} ${index === lastColumn ? 'g-pr0' : 'g-pr4'} 
                  ${textAligns[textAlign]} c-on-base-2 fw4 `}
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
                    <td key={e} className={`g-pv5 g-ph4 c-on-base-1 tc `}>
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={this.props.isLoading} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((fields, index) => {
                const formatted_row = columns.map((column, indexColumn) => {
                  const textAlign = column.textAlign || 'left'
                  return (
                    <td
                      key={index + column.id}
                      className={`${indexColumn === 0 ? 'g-pl0' : 'g-pl4'} ${
                        indexColumn === lastColumn ? 'g-pr0' : 'g-pr4'
                      }
                      g-pv2 c-on-base-1 ${textAligns[textAlign]}`}
                    >
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={false}>
                        {() => fields[column.id]}
                      </Placeholder>
                    </td>
                  )
                })

                return <tr key={index}>{formatted_row}</tr>
              })}
        </tbody>
      </table>
    )
  }
}

TableList.propTypes = {
  /** Columns that will have on table. */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      /** ID of the column. */
      id: PropTypes.string.isRequired,
      /** Label of the column. */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      /** Size of the column in percentage. */
      size: PropTypes.number,
      /** Make the column text align. One of: left, right, center */
      textAlign: PropTypes.oneOf(['left', 'right', 'center'])
    })
  ).isRequired,
  /** Rows that will be show on table. */
  rows: PropTypes.array.isRequired,
  /** Is table in Loading State */
  isLoading: PropTypes.bool
}

TableList.defaultProps = {
  isLoading: false
}

export default TableList
