import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPhone extends PureComponent {
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
        <path  d="M4.07,1.5a.51.51,0,0,1,.38.16L6.67,3.87a.56.56,0,0,1,0,.76L5.41,5.88a2,2,0,0,0,0,2.83l3.88,3.88a2,2,0,0,0,2.83,0l1.25-1.26a.56.56,0,0,1,.76,0l2.21,2.22a.54.54,0,0,1,0,.76l-1.61,1.6a2,2,0,0,1-1.41.59H11.14A4.47,4.47,0,0,1,8,15.18L2.82,10A4.47,4.47,0,0,1,1.5,6.86V4.68a2,2,0,0,1,.59-1.41l1.6-1.61a.54.54,0,0,1,.38-.16m0-1.5A2,2,0,0,0,2.63.6L1,2.21A3.46,3.46,0,0,0,0,4.68V6.86A6,6,0,0,0,1.76,11.1L6.9,16.24A6,6,0,0,0,11.14,18h2.18a3.46,3.46,0,0,0,2.47-1l1.61-1.6a2,2,0,0,0,0-2.88l-2.21-2.22a2.05,2.05,0,0,0-2.88,0l-1.25,1.26a.52.52,0,0,1-.71,0L6.47,7.65a.51.51,0,0,1,0-.71L7.73,5.69a2,2,0,0,0,0-2.88L5.51.6A2,2,0,0,0,4.07,0Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPhone.propTypes = {
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

IconPhone.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPhone
