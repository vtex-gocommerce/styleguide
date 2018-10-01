import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconCart extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M14.77,12.25H5.83a1.76,1.76,0,0,1-1.72-1.42L2.38,1.5H0V0H3.62l.57,3.25H18l-1.52,7.59A1.74,1.74,0,0,1,14.77,12.25ZM4.48,4.75l1.1,5.8a.26.26,0,0,0,.25.2h8.94a.25.25,0,0,0,.24-.2l1.16-5.8ZM6.25,14.8a.95.95,0,1,1-1,.95,1,1,0,0,1,1-.95m0-1.3A2.25,2.25,0,1,0,8.5,15.75,2.25,2.25,0,0,0,6.25,13.5Zm8,1.3a.95.95,0,1,1-.95.95,1,1,0,0,1,.95-.95m0-1.3a2.25,2.25,0,1,0,2.25,2.25,2.25,2.25,0,0,0-2.25-2.25Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconCart.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string,
}

IconCart.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconCart





