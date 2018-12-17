import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconAngleDown extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M9,12.2491 C8.714,12.2491 8.442,12.1271 8.252,11.9141 L4.252,7.4141 C3.886,7.0011 3.923,6.3691 4.335,6.0021 C4.749,5.6361 5.38,5.6721 5.747,6.0851 L9,9.7441 L12.252,6.0851 C12.619,5.6721 13.251,5.6351 13.664,6.0021 C14.077,6.3691 14.114,7.0011 13.747,7.4141 L9.747,11.9141 C9.558,12.1271 9.285,12.2491 9,12.2491"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconAngleDown.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string
}

IconAngleDown.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconAngleDown
