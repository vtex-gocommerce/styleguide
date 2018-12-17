import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconAngleUp extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M13,12.2578 C12.725,12.2578 12.45,12.1448 12.252,11.9218 L9,8.2628 L5.748,11.9218 C5.38,12.3348 4.749,12.3718 4.335,12.0048 C3.923,11.6378 3.886,11.0058 4.252,10.5928 L8.252,6.0928 C8.632,5.6658 9.368,5.6658 9.748,6.0928 L13.747,10.5928 C14.114,11.0058 14.077,11.6378 13.664,12.0048 C13.474,12.1738 13.236,12.2578 13,12.2578"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconAngleUp.propTypes = {
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

IconAngleUp.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconAngleUp
