import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconShoppingBasket extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, animate } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg
        className={`${className} ${animate ? styles.iconAnimate : ''}`}
        {...style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path  d="M4.62,10.66a.65.65,0,0,1,1.26-.32l1,4a.65.65,0,0,1-.47.79l-.16,0a.65.65,0,0,1-.63-.49Zm7,4.47.16,0a.65.65,0,0,0,.63-.49l1-4a.65.65,0,1,0-1.26-.32l-1,4A.65.65,0,0,0,11.59,15.13ZM9,15.15a.65.65,0,0,0,.65-.65V10.45a.65.65,0,1,0-1.3,0V14.5A.65.65,0,0,0,9,15.15ZM18,8.5h-.84l-1.63,7.16A3,3,0,0,1,12.61,18H5.39a3,3,0,0,1-2.92-2.34L.84,8.5H0V7H1.3a1.06,1.06,0,0,1,.11-.21l5-6.5a.74.74,0,0,1,1-.13.74.74,0,0,1,.13,1.05L3.14,7H14.86L10.41,1.21a.74.74,0,0,1,.13-1,.74.74,0,0,1,1.05.13l5,6.5A1.06,1.06,0,0,1,16.7,7H18Zm-2.38,0H2.38l1.55,6.83A1.5,1.5,0,0,0,5.39,16.5h7.22a1.5,1.5,0,0,0,1.46-1.17Z" fill={svgColor} />
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
  animate: PropTypes.bool
}

IconShoppingBasket.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconShoppingBasket
