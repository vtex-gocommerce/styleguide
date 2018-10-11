import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Placeholder from '../../DataLoading/Placeholder'
import CheckBox from '../../Form/CheckBox'

const textAligns = {
  right: 'tr',
  left: 'tl',
  center: 'tc'
}

const buildTableTd = (Wrapper, props = {}, children) =>
  Wrapper ? (
    <Wrapper className="g-pv4 g-ph4 db no-underline c-on-base" {...props}>
      {children}
    </Wrapper>
  ) : (
    children
  )

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
    const { columns, rows, selectable, placeholderLength, bodyTrHeight } = this.props
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
              const textAlign =
                (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')

              return (
                <th
                  key={column.id}
                  className={`g-pv3 g-ph4 c-on-base-2 fw4 g-f1 bb b--base-4 ${textAligns[textAlign]} `}
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
                <tr key={e} style={{ height: bodyTrHeight }}>
                  {[...Array(this.props.columns.length).keys()].map(e => (
                    <td key={e} className={`g-pv4 g-ph4 c-on-base-1 tc bb b--base-4`}>
                      <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={this.props.isLoading} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((fields, index) => {
                const formatted_row = columns.map(column => {
                  const textAlign =
                    (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')
                  const hasWrapper = !!column.cellWrapper
                  return (
                    <td
                      key={index + column.id}
                      className={`c-on-base-1 bb b--base-4 ${textAligns[textAlign]} ${hasWrapper ? '' : 'g-pv4 g-ph4'}`}
                    >
                      {buildTableTd(
                        column.cellWrapper,
                        fields.wrapperProps,
                        <Placeholder className="g-h2 w-100 g-mt2 br4" isPlaceholderActive={false}>
                          {() => fields[column.id]}
                        </Placeholder>
                      )}
                    </td>
                  )
                })

                return (
                  <tr
                    key={index}
                    style={{ height: bodyTrHeight }}
                    className={`${fields.bgColor && 'bg-' + fields.bgColor} ${fields.lineLink &&
                      'pointer'} hover-bg-base-2 bg-animate `}
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
      /** @deprecated Make the column centered. */
      isCentered: PropTypes.bool,
      /** Component to wrap a cell. */
      cellWrapper: PropTypes.node,
      /** Make the column text align. One of: left, right, center */
      textAlign: PropTypes.oneOf(['left', 'right', 'center'])
    })
  ).isRequired,
  /** Rows that will be show on table. */
  rows: PropTypes.array.isRequired,
  /** Makes rows selectable. */
  selectable: PropTypes.bool,
  /** Is table in Loading State */
  isLoading: PropTypes.bool,

  placeholderLength: PropTypes.number,
  onChange: PropTypes.func,
  bodyTrHeight: PropTypes.string
}

Table.defaultProps = {
  selectable: false,
  isLoading: false,
  placeholderLength: 3,
  bodyTrHeight: 'auto',
  onChange: () => {}
}

export default Table
