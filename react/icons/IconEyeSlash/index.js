import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconEyeSlash extends PureComponent {
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
        <path  d="M9.42,5.1,7.3,2.65A10.24,10.24,0,0,1,9,2.5c6,0,9,5,9,6.5a6.56,6.56,0,0,1-2.06,3.62l-1-1.14A5.9,5.9,0,0,0,16.5,9a7.4,7.4,0,0,0-3.67-4.07A4.83,4.83,0,0,1,13.5,7.5a6.57,6.57,0,0,1-.28,2L11.8,7.85A1.87,1.87,0,0,0,12,7a2,2,0,0,0-2-2A1.86,1.86,0,0,0,9.42,5.1ZM18,18H16l-3-3.35a9.76,9.76,0,0,1-4,.85c-6,0-9-5-9-6.5,0-.95,1.22-3.31,3.64-4.9L0,0H2Zm-6-4.55-1.45-1.62A6.34,6.34,0,0,1,9,12,4.2,4.2,0,0,1,4.5,7.5a5.25,5.25,0,0,1,.38-2l-.22-.25A7.3,7.3,0,0,0,1.5,9,7.88,7.88,0,0,0,9,14,8.13,8.13,0,0,0,12,13.45Z" fill={svgColor} />
      </svg>
    )
  }
}

IconEyeSlash.propTypes = {
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

IconEyeSlash.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconEyeSlash
