import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconCode extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M3.86,14.94.37,10.15a2,2,0,0,1,0-2.3L3.86,3.06l1.21.88L1.59,8.74a.42.42,0,0,0,0,.52l3.48,4.8Zm13.77-4.79a2,2,0,0,0,0-2.3L14.14,3.06l-1.21.88,3.48,4.8a.42.42,0,0,1,0,.52l-3.48,4.8,1.21.88ZM11.75,0h-1.5l-4,18h1.5Z"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconCode.propTypes = {
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

IconCode.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconCode
