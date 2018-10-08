import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconFullScreen extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d="M6,18H0V12H2.5v3.5H6Zm9.5-6v3.5H12V18h6V12ZM6,0H0V6H2.5V2.5H6ZM18,6V0H12V2.5h3.5V6Z" fill={svgColor} />
      </svg>
    )
  }
}

IconFullScreen.propTypes = {
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

IconFullScreen.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconFullScreen
