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
const placeholderSizes = {
  default: 'g-pv4',
  large: 'g-pv8'
}

const buildTableTd = (Wrapper, props = {}, children) =>
  Wrapper ? (
    <Wrapper className="g-pv3 g-ph4 db no-underline c-on-base" {...props}>
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

  selectAll = (event, checked) => {
    let updatedList

    if (checked) {
      updatedList = [...Array(this.props.rows.length).keys()]
    } else {
      updatedList = []
    }

    const elements = this.props.data ? this.props.data : this.props.rows
    const mapped = elements.filter((element, index) => {
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

    this.setState({ selectedList: [...updatedList].sort() })

    const elements = this.props.data ? this.props.data : this.props.rows
    const mapped = elements.filter((element, index) => {
      if (updatedList.includes(index)) {
        return element
      }
    })

    this.props.onChange(mapped)
  }

  render() {
    const { columns, rows, selectable, placeholderLength, placeholderSize, actions } = this.props

    return (
      <table className={`w-100 g-f2 ba b--base-4`} cellSpacing="0">
        <thead className={`tl bg-base-2`}>
          {selectable && (
            <tr>
              <th className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }}>
                <CheckBox onClick={this.selectAll} />
              </th>
              <th className={`g-pv2 g-ph4 tl bb b--base-4 normal c-on-base`} colSpan={columns.length}>
                {actions && actions}
              </th>
            </tr>
          )}

          <tr>
            {selectable && <th className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }} />}
            {columns.map((column, index) => {
              const textAlign =
                (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')

              return (
                <th
                  key={column.id}
                  className={`g-h9 g-pv1 g-ph4 c-on-base-2 fw4 g-f1 bb b--base-4 ${textAligns[textAlign]}`}
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
                <tr key={e} className="g-h11">
                  {[...Array(this.props.columns.length + (selectable ? 1 : 0)).keys()].map(e => (
                    <td key={e} className={`${placeholderSizes[placeholderSize]} g-ph4 c-on-base-1 tc bb b--base-4`}>
                      <Placeholder className="g-h2 w-100 br4" isPlaceholderActive={this.props.isLoading} />
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
                      className={`c-on-base-1 bb b--base-4 ${textAligns[textAlign]} ${hasWrapper ? '' : 'g-pv1 g-ph4'}`}
                    >
                      {buildTableTd(
                        column.cellWrapper,
                        fields.cellWrapperProps,
                        <Placeholder className="g-h2 w-100 br4" isPlaceholderActive={false}>
                          {() => fields[column.id]}
                        </Placeholder>
                      )}
                    </td>
                  )
                })

                return (
                  <tr
                    key={index}
                    className={`${(fields.bgColor && 'bg-' + fields.bgColor) || ''} ${(fields.lineLink && 'pointer') ||
                      ''} hover-bg-base-2 bg-animate g-h11`}
                    onClick={fields.lineLink && fields.lineLink}
                  >
                    {selectable && (
                      <th className="g-pv1 g-f1 tc bb b--base-4" style={{ width: '40px' }}>
                        <CheckBox
                          onClick={(event, checked) => {
                            this.select(index, checked)
                          }}
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
      /** Component to wrap a cell. */
      cellWrapper: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
      /** Make the column text align. One of: left, right, center */
      textAlign: PropTypes.oneOf(['left', 'right', 'center'])
    })
  ).isRequired,
  /** Rows that will be show on table. */
  rows: PropTypes.array.isRequired,
  /** Optional data used on select change instead of rows. */
  data: PropTypes.array,
  /** Makes rows selectable. */
  selectable: PropTypes.bool,
  /** Is table in Loading State */
  isLoading: PropTypes.bool,
  /** Placeholder options */
  placeholderLength: PropTypes.number,
  placeholderSize: PropTypes.oneOf(['default', 'large']),
  onChange: PropTypes.func,
  actions: PropTypes.node
}

Table.defaultProps = {
  selectable: false,
  isLoading: false,
  placeholderLength: 3,
  placeholderSize: 'default',
  onChange: () => {}
}

export default Table
