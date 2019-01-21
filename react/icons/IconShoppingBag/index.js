import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconShoppingBag extends PureComponent {
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
        <path  d="M13.5,5.5v-1a4.5,4.5,0,0,0-9,0v1H0v9A3.5,3.5,0,0,0,3.5,18h11A3.5,3.5,0,0,0,18,14.5v-9ZM6,4.5a3,3,0,0,1,6,0v1H6Zm10.5,10a2,2,0,0,1-2,2H3.5a2,2,0,0,1-2-2V7h3v3H6V7h6v3h1.5V7h3Z" fill={svgColor} />
      </svg>
    )
  }
}

IconShoppingBag.propTypes = {
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

IconShoppingBag.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconShoppingBag
