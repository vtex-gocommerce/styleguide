import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTagSlash extends PureComponent {
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
        <path  d="M2,0H0L4,4.53.9,8A3,3,0,0,0,1,12.15L5.85,17A3,3,0,0,0,10,17.1l2.91-2.61L16,18h2ZM9,16a1.52,1.52,0,0,1-1,.38,1.5,1.5,0,0,1-1.06-.44L2.07,11.09A1.5,1.5,0,0,1,2,9L5,5.66l6.86,7.71Z" fill={svgColor} /><path  d="M15,0H9.88a4,4,0,0,0-3,1.33l-.39.43,1,1.14L8,2.33A2.52,2.52,0,0,1,9.88,1.5H15A1.5,1.5,0,0,1,16.5,3V8.12A2.52,2.52,0,0,1,15.67,10l-1.14,1,1,1.13,1.16-1a4,4,0,0,0,1.33-3V3A3,3,0,0,0,15,0Z" fill={svgColor} /><path  d="M15,5.75a2.75,2.75,0,0,0-5.45-.5l2.81,3.24A2.74,2.74,0,0,0,15,5.75ZM12.25,7.4A1.65,1.65,0,1,1,13.9,5.75,1.65,1.65,0,0,1,12.25,7.4Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTagSlash.propTypes = {
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

IconTagSlash.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTagSlash
