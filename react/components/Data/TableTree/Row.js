import * as React from 'react'
import Placeholder from '../../DataLoading/Placeholder'

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

export default class Row extends React.PureComponent {
  state = {
    open: this.props.open || false,
  }

  getFormattedRow = () => {
    const { columns, fields, depth } = this.props

    return columns.map(column => {
      const textAlign =
        (column.textAlign && column.textAlign) || (column && column.isCentered ? 'center' : 'left')
      const hasWrapper = !!column.cellWrapper
      return (
        <div
          key={depth + column.id}
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
  }

  render() {
    const { fields, depth } = this.props

    return (
      <div>
        <div className={'flex flex-column'}>
          <div
            className={`${(fields.bgColor && 'bg-' + fields.bgColor) || ''} ${(fields.lineLink && 'pointer') ||
              ''} hover-bg-base-2 bg-animate g-h11 flex flex-row`}
            onClick={fields.lineLink && fields.lineLink}
          >
            {/* {selectable && (
              <div className="g-pv1 g-f1 tc bb b--base-4" style={{ width: '40px' }}>
                <CheckBox
                  onClick={(event, checked) => {
                    this.select(index, checked)
                  }}
                  checked={this.state.selectedList.includes(index)}
                />
              </div>
            )} */}
            <div className={`flex flex-row flex-grow-1`} style={{ paddingLeft: `${depth*40}px` }}>
              {this.getFormattedRow()}
            </div>
            {!!fields.children && (
              <div 
                className="g-pv1 g-f1 tc bb b--base-4 pointer hover-blue flex items-center justify-center" 
                style={{ width: '40px' }} 
                onClick={() => this.setState({ open: !this.state.open })}
              >
                <IconAngleDown />
              </div>
            )}
          </div>
        </div>

        <div style={{ height: this.state.open ? 'auto': 0, overflow: 'hidden' }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}