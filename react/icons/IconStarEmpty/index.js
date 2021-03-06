import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconStarEmpty extends PureComponent {
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
        <path  d="M9,2.74l1.52,3.58A1.92,1.92,0,0,0,12,7.45l3.39.49-2.66,2.18a1.92,1.92,0,0,0-.63,2L13,15.4l-2.9-2A1.89,1.89,0,0,0,9,13a1.93,1.93,0,0,0-1.09.34L5,15.4l.88-3.32a1.92,1.92,0,0,0-.63-2L2.61,7.94,6,7.45A1.92,1.92,0,0,0,7.48,6.32L9,2.74M9,0a.69.69,0,0,0-.64.42L6.1,5.73A.42.42,0,0,1,5.78,6L.6,6.71A.7.7,0,0,0,.26,8l4.05,3.33a.4.4,0,0,1,.14.41L3,17.12a.7.7,0,0,0,.68.88.65.65,0,0,0,.39-.13l4.69-3.26a.41.41,0,0,1,.46,0l4.69,3.26a.65.65,0,0,0,.39.13.7.7,0,0,0,.68-.88l-1.44-5.43a.39.39,0,0,1,.14-.41l4-3.33a.7.7,0,0,0-.34-1.24L12.21,6a.42.42,0,0,1-.31-.24L9.64.42A.69.69,0,0,0,9,0Z" fill={svgColor} />
      </svg>
    )
  }
}

IconStarEmpty.propTypes = {
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

IconStarEmpty.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconStarEmpty
