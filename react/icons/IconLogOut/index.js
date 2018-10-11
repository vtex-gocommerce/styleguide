import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconLogOut extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M8,18H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H8V1.5H2a.5.5,0,0,0-.5.5V16a.5.5,0,0,0,.5.5H8Zm9.78-9.57-4.5-5A.85.85,0,1,0,12,4.57l3.31,3.68H5.15v1.5H15.33L12,13.43a.85.85,0,0,0,.63,1.42.87.87,0,0,0,.63-.28l4.5-5A.86.86,0,0,0,17.78,8.43Z"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconLogOut.propTypes = {
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

IconLogOut.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconLogOut
