import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconInstagram extends PureComponent {
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
        <path  d="M16,14.3A3.07,3.07,0,0,1,14.31,16c-1.19.47-4,.36-5.31.36s-4.12.1-5.3-.36A3,3,0,0,1,2,14.3c-.47-1.18-.36-4-.36-5.3S1.52,4.88,2,3.7A3,3,0,0,1,3.7,2c1.18-.47,4-.36,5.3-.36s4.13-.1,5.31.36A3.07,3.07,0,0,1,16,3.7c.47,1.18.36,4,.36,5.3S16.49,13.12,16,14.3Zm1.92-9a5.32,5.32,0,0,0-1.46-3.77A5.35,5.35,0,0,0,12.71.07C11.23,0,6.77,0,5.29.07A5.3,5.3,0,0,0,1.52,1.51,5.39,5.39,0,0,0,.06,5.29C0,6.77,0,11.22.06,12.71a5.32,5.32,0,0,0,1.46,3.77,5.35,5.35,0,0,0,3.77,1.45c1.48.09,5.94.09,7.42,0a5.27,5.27,0,0,0,3.77-1.45,5.36,5.36,0,0,0,1.46-3.77C18,11.22,18,6.78,17.94,5.29ZM14.88,4.2A1.08,1.08,0,1,1,13.8,3.12,1.07,1.07,0,0,1,14.88,4.2ZM9,12a3,3,0,1,1,3-3A3,3,0,0,1,9,12ZM9,4.39A4.61,4.61,0,1,0,13.62,9,4.6,4.6,0,0,0,9,4.39Z" fill={svgColor} />
      </svg>
    )
  }
}

IconInstagram.propTypes = {
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

IconInstagram.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconInstagram
