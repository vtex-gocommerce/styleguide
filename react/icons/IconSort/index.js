import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconSort extends PureComponent {
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
        <path  d="M12,7H6a.74.74,0,0,1-.69-.46.76.76,0,0,1,.16-.82l3-3a.75.75,0,0,1,1.06,0l3,3a.76.76,0,0,1,.16.82A.74.74,0,0,1,12,7ZM9,15.51a.74.74,0,0,1-.53-.22l-3-3a.76.76,0,0,1-.16-.82A.74.74,0,0,1,6,11h6a.74.74,0,0,1,.69.46.76.76,0,0,1-.16.82l-3,3A.74.74,0,0,1,9,15.51Z" fill={svgColor} />
      </svg>
    )
  }
}

IconSort.propTypes = {
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

IconSort.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconSort
