import * as React from 'react'
import Placeholder from '../../DataLoading/Placeholder'
import CheckBox from '../../Form/CheckBox'

import IconAngleDown from '../../../icons/IconAngleDown/index'

const textAligns = {
  right: 'tr',
  left: 'tl',
  center: 'tc'
}

const buildTableTd = (Wrapper, props = {}, children) =>
  Wrapper ? (
    <Wrapper className="pv3 ph4 db no-underline c-on-base flex-grow-1" {...props}>
      {children}
    </Wrapper>
  ) : (
    children
  )

export default class Row extends React.PureComponent {
  state = {
    open: this.props.open,
  }

  getFormattedRow = () => {
    const { columns, fields, depth, isLast } = this.props
    const { open } = this.state

    return columns.map(column => {
      const textAlign =
        (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')
      const hasWrapper = !!column.cellWrapper
      return (
        <div
          key={depth + column.id}
          className={`flex-grow-1 flex items-center c-on-base-1 ${open || !isLast ? 'bb b--base-4' : ''} ${textAligns[textAlign]} ${hasWrapper ? '' : "pv1 ph4"}`}
        >
          {buildTableTd(
            column.cellWrapper,
            fields.cellWrapperProps,
            <Placeholder className="h1 w-100 br4" isPlaceholderActive={false}>
              {() => fields[column.id]}
            </Placeholder>
          )}
        </div>
      )
    })
  }

  render() {
    const { fields, depth, root, selectable, isLast } = this.props
    const { open } = this.state

    return (
      <div className={`hover-bg-base-2 bg-animate ${root && open && !isLast ? 'bb b--base-4' : ''}`}>
        <div className={'flex flex-column'}>
          <div
            className={`${(fields.bgColor && 'bg-' + fields.bgColor) || ''} ${(fields.lineLink && 'pointer') ||
  ''} h-large flex flex-row`}
            onClick={fields.lineLink && fields.lineLink}
            style={{ paddingLeft: `${depth*40}px` }}
          >
            <div style={{ width: '10px' }} className={`${!open && depth === 0 && !isLast ? 'bb b--base-4' : ''}`} />
            {selectable && (
              <div className={`pv1 f7 tc flex justify-center items-center ${open || !isLast ? 'bb b--base-4' : ''}`} style={{ width: '40px' }}>
                <CheckBox
                  onClick={(event, checked) => {
                    this.props.onSelect(checked)
                  }}
                  checked={this.props.isChecked}
                />
              </div>
            )}
            <div className={`flex flex-row flex-grow-1`}>
              {this.getFormattedRow()}
            </div>
            <div 
              className={`pv1 f7 tc b--base-4 pointer hover-blue flex items-center justify-center ${!open && depth === 0 && !isLast ? 'bb b--base-4' : ''}`} 
              style={{ width: '50px' }} 
              onClick={() => this.setState({ open: !open })}
            >
              {!!fields.children && !!fields.children.length && <IconAngleDown />}
            </div>
          </div>
        </div>

        <div 
          style={{ 
            maxHeight: open ? '500px' : '0px',
            overflow: 'hidden',
            transition: open ? 'max-height 1s' : 'max-height .2s'
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}