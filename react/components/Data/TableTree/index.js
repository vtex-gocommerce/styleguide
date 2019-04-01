import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Placeholder from '../../DataLoading/Placeholder'
import CheckBox from '../../Form/CheckBox'

import Row from './Row'

const textAligns = {
  right: 'tr',
  left: 'tl',
  center: 'tc'
}
const placeholderSizes = {
  default: 'g-pv4',
  large: 'g-pv8'
}

class TableTree extends PureComponent {
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
      return (
        <Row 
          key={`${depth} - ${index}`}
          fields={fields}
          columns={columns}
          selectable={selectable}
          depth={depth}
          root={depth === 0}
          onSelect={this.select}
          isChecked={this.state.selectedList.includes(index)}
        >
          {this.renderTreeNodes(fields.children, depth+1)}            
        </Row>
      )
    })
  }

  render() {
    const { columns, rows, selectable, placeholderLength, placeholderSize, actions } = this.props

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
              <div className='g-pv2 g-ph4 tc bb b--base-4' style={{ width: '50px' }} />
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
            <div className={`g-pv2 g-ph4 tc bb b--base-4`} style={{ width: '40px' }} />
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

TableTree.propTypes = {
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

TableTree.defaultProps = {
  selectable: false,
  isLoading: false,
  placeholderLength: 3,
  placeholderSize: 'default',
  onChange: () => {}
}

export default TableTree
