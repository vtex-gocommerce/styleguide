import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlaceholderContainer from '../../DataLoading/PlaceholderContainer'

class Container extends PureComponent {
  static HR = () => <hr className="w-auto nh8 mv6 bw0 bg-base-4 c-on-base-4" style={{ height: 1 }} />

  render() {
    const { id, isPlaceholderActive, classNameArray, children, noVerticalPadding, noHorizontalPadding } = this.props
    const verticalPadding = isPlaceholderActive || !noVerticalPadding ? "pv6" : ''
    const horizontalPadding = isPlaceholderActive || !noHorizontalPadding ? `ph8` : ''
    return (
      <div
        id={id}
        className={`w-100 flex flex-column mb8 br2 ba b--base-4 bg-base-1 gray f5 ${verticalPadding}`}
      >
        <div className={horizontalPadding}>
          <PlaceholderContainer isPlaceholderActive={isPlaceholderActive} classNameArray={classNameArray}>
            {() => children}
          </PlaceholderContainer>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  /** enable placeholder in Container */
  isPlaceholderActive: PropTypes.bool.isRequired,
  /** Show or hide the close icon */
  classNameArray: PropTypes.array,
  /** Revome inner verticalPaddingpadding of the container */
  noVerticalPadding: PropTypes.bool,
  /** Revome inner horizontal padding of the container */
  noHorizontalPadding: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string
}

Container.defaultProps = {
  id: '',
  isPlaceholderActive: false,
  classNameArray: [
    ["h-small w-30 mb7"],
    ["h1 w-30 mb5"],
    ["h-regular w-80 mb5"],
    ["h1 w-30 mb5"],
    ["h-regular w-80 mb5"],
    ["h1 w-30 mb5"],
    ["h-regular w-80 mb5"]
  ]
}

export default Container
