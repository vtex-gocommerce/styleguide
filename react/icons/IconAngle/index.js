import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

const rotate = {
  up: 90,
  right: 180,
  down: 270,
  left: 0
}

class IconAngle extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, side } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg
        style={{ transform: `rotate(${rotate[side]}deg)` }}
        className={className}
        {...style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          d="M10.75,14a1,1,0,0,1-.66-.25l-4.5-4a1,1,0,0,1,0-1.5l4.5-4a1,1,0,1,1,1.32,1.5L7.76,9l3.65,3.25a1,1,0,0,1,.09,1.41A1,1,0,0,1,10.75,14Z"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconAngle.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']).isRequired,
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

IconAngle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconAngle
