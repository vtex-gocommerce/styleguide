import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconDanger extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Zm7.5,9a7.44,7.44,0,0,1-1.7,4.74L4.26,3.2A7.49,7.49,0,0,1,16.5,9ZM1.5,9A7.44,7.44,0,0,1,3.2,4.26L13.74,14.8A7.49,7.49,0,0,1,1.5,9Z"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconDanger.propTypes = {
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

IconDanger.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconDanger
