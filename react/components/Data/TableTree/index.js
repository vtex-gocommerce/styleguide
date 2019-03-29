import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Placeholder from '../../DataLoading/Placeholder'
import CheckBox from '../../Form/CheckBox'

import IconAngleDown from '../../../icons/IconAngleDown/index'

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
    <Wrapper className="g-pv3 g-ph4 db no-underline c-on-base flex-grow-1" {...props}>
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

    this.setState({ selectedList: [...updatedList].sort() })

    const mapped = this.props.rows.filter((element, index) => {
      if (updatedList.includes(index)) {
        return element
      }
    })

    this.props.onChange(mapped)
  }

  renderTreeNodes = (rows, depth = 0) => {
    if (!rows) return

    const { columns, selectable } = this.props
    
    return rows.map((fields, index) => {
      const formatted_row = columns.map(column => {
        const textAlign =
          (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')
        const hasWrapper = !!column.cellWrapper
        return (
          <div
            key={index + column.id}
            className={`flex-grow-1 flex items-center c-on-base-1 bb b--base-4 ${textAligns[textAlign]} ${hasWrapper ? '' : 'g-pv1 g-ph4'}`}
          >
            {buildTableTd(
              column.cellWrapper,
              fields.cellWrapperProps,
              <Placeholder className="g-h2 w-100 br4" isPlaceholderActive={false}>
                {() => fields[column.id]}
              </Placeholder>
            )}
          </div>
        )
      })

      return (
        <div className={'flex flex-column'} key={`${depth} - ${index}`}>
          <div
            key={index}
            className={`${(fields.bgColor && 'bg-' + fields.bgColor) || ''} ${(fields.lineLink && 'pointer') ||
              ''} hover-bg-base-2 bg-animate g-h11 flex flex-row`}
            onClick={fields.lineLink && fields.lineLink}
          >
            {selectable && (
              <div className="g-pv1 g-f1 tc bb b--base-4" style={{ width: '40px' }}>
                <CheckBox
                  onClick={(event, checked) => {
                    this.select(index, checked)
                  }}
                  checked={this.state.selectedList.includes(index)}
                />
              </div>
            )}
            <div className={`flex flex-row flex-grow-1`} style={{ paddingLeft: `${depth*40}px` }}>
              {formatted_row}              
            </div>
            {/* {!!fields.children && (
              <div className="g-pv1 g-f1 tc bb b--base-4 pointer hover-blue flex items-center justify-center" style={{ width: '40px' }} onClick={() => console.log('--- open dropdown')}>
                <IconAngleDown />
              </div>
            )} */}
          </div>

          {this.renderTreeNodes(fields.children, depth+1)}            
        </div>
      )
    })
  }

  render() {
    const { columns, rows, selectable, placeholderLength, placeholderSize, actions, multilevel } = this.props

    return (
      <div className={`w-100 g-f2 ba b--base-4`} cellSpacing="0">
        <div className={`tl bg-base-2 flex flex-row`}>
          {selectable && (
            <div>
              <div className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }}>
                <CheckBox onClick={this.selectAll} />
              </div>
              <div className={`g-pv2 g-ph4 tl bb b--base-4 normal c-on-base`} colSpan={columns.length}>
                {actions && actions}
              </div>
              {multilevel && <div className='g-pv2 g-ph4 tc bb b--base-4' />}
            </div>
          )}

          <div className={'flex flex-row flex-grow-1'}>
            {selectable && <div className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }} />}
            {columns.map((column, index) => {
              const textAlign =
                (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')

              return (
                <div
                  key={column.id}
                  className={`flex flex-grow-1 g-h9 g-pv1 g-ph4 c-on-base-2 fw4 g-f1 bb b--base-4 ${textAligns[textAlign]}`}
                  style={{ width: column.size + '%' }}
                >
                  {column.label}
                </div>
              )
            })}
            {multilevel && <div className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }} />}
          </div>
        </div>
        <div className="bg-base-1">
          {this.props.isLoading
            ? [...Array(placeholderLength).keys()].map(e => (
                <div key={e} className="g-h11">
                  {[...Array(this.props.columns.length + (selectable ? 1 : 0)).keys()].map(e => (
                    <div key={e} className={`${placeholderSizes[placeholderSize]} g-ph4 c-on-base-1 tc bb b--base-4`}>
                      <Placeholder className="g-h2 w-100 br4" isPlaceholderActive={this.props.isLoading} />
                    </div>
                  ))}
                </div>
              ))
            : this.renderTreeNodes(rows)}
        </div>
      </div>
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
