import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconAngleRight extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M7.2505,14 C6.9745,14 6.7005,13.887 6.5025,13.664 C6.1355,13.251 6.1725,12.619 6.5855,12.252 L10.2445,9 L6.5855,5.747 C6.1725,5.38 6.1355,4.748 6.5025,4.335 C6.8695,3.923 7.5005,3.885 7.9145,4.252 L12.4145,8.252 C12.6275,8.442 12.7505,8.714 12.7505,9 C12.7505,9.285 12.6275,9.558 12.4145,9.747 L7.9145,13.747 C7.7235,13.916 7.4865,14 7.2505,14"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconAngleRight.propTypes = {
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

IconAngleRight.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconAngleRight
