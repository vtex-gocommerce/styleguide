import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconClock extends PureComponent {
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
        <path  d="M9,1.5A7.5,7.5,0,1,1,1.5,9,7.5,7.5,0,0,1,9,1.5M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Zm3.62,11.42a.75.75,0,0,0-.2-1L9.75,8.6V4a.75.75,0,0,0-1.5,0V9.4l3.33,2.22a.74.74,0,0,0,.42.13A.75.75,0,0,0,12.62,11.42Z" fill={svgColor} />
      </svg>
    )
  }
}

IconClock.propTypes = {
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

IconClock.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconClock
