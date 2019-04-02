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
    <Wrapper className="g-pv3 g-ph4 db no-underline c-on-base flex-grow-1" {...props}>
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
          className={`flex-grow-1 flex items-center c-on-base-1 ${open ? 'bb b--base-4' : ''} ${textAligns[textAlign]} ${hasWrapper ? '' : 'g-pv1 g-ph4'}`}
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
  }

  render() {
    const { fields, depth, root, selectable } = this.props
    const { open } = this.state

    return (
      <div className={`hover-bg-base-2 bg-animate ${root ? 'bb b--base-4': ''}`}>
        <div className={'flex flex-column'}>
          <div
            className={`${(fields.bgColor && 'bg-' + fields.bgColor) || ''} ${(fields.lineLink && 'pointer') ||
              ''} g-h11 flex flex-row`}
            onClick={fields.lineLink && fields.lineLink}
            style={{ paddingLeft: `${depth*40}px` }}
          >
            <div style={{ width: '10px' }} />
            {selectable && (
              <div className={`g-pv1 g-f1 tc flex justify-center items-center ${open ? 'bb b--base-4' : ''}`} style={{ width: '40px' }}>
                <CheckBox
                  onClick={(event, checked) => {
                    this.props.onSelect(index, checked)
                  }}
                  checked={this.props.isChecked}
                />
              </div>
            )}
            <div className={`flex flex-row flex-grow-1`}>
              {this.getFormattedRow()}
            </div>
            <div 
              className={`g-pv1 g-f1 tc b--base-4 pointer hover-blue flex items-center justify-center`} 
              style={{ width: '50px' }} 
              onClick={() => this.setState({ open: !open })}
            >
              {!!fields.children && <IconAngleDown />}
            </div>
          </div>
        </div>

        <div 
          style={{ 
            height: 'auto', 
            maxHeight: open ? '500px' : 0, // for animation purposes
            overflow: 'hidden',
            transition: 'max-height .3s ease-in'
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}