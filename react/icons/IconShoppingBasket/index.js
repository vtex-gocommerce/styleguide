import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconShoppingBasket extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M5.62,14.66a.65.65,0,0,0,.63.49l.16,0a.65.65,0,0,0,.47-.79l-1-4a.65.65,0,0,0-1.26.32Z" fill={svgColor} />
        <path d="M11.59,15.13l.16,0a.65.65,0,0,0,.63-.49l1-4a.65.65,0,1,0-1.26-.32l-1,4A.65.65,0,0,0,11.59,15.13Z" fill={svgColor} />
        <path d="M9,15.15a.65.65,0,0,0,.65-.65V10.45a.65.65,0,1,0-1.3,0V14.5A.65.65,0,0,0,9,15.15Z" fill={svgColor} />
        <path d="M18,7H16.7a1.06,1.06,0,0,0-.11-.21l-5-6.5A.74.74,0,0,0,10.54.16a.74.74,0,0,0-.13,1.05L14.86,7H3.14L7.59,1.21a.74.74,0,0,0-.13-1,.74.74,0,0,0-1,.13l-5,6.5A1.06,1.06,0,0,0,1.3,7H0V8.5H.84l1.63,7.16A3,3,0,0,0,5.39,18h7.22a3,3,0,0,0,2.92-2.34L17.16,8.5H18Zm-3.93,8.33a1.5,1.5,0,0,1-1.46,1.17H5.39a1.5,1.5,0,0,1-1.46-1.17L2.38,8.5H15.62Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconShoppingBasket.propTypes = {
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

IconShoppingBasket.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconShoppingBasket



