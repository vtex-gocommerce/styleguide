import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconLink extends PureComponent {
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
        <path class="cls-2" d="M16.72,7.5,14.41,9.82a.77.77,0,0,1-1.09-1.09l2.31-2.32a2.86,2.86,0,0,0-4-4L7.76,6.21a1.8,1.8,0,0,0,0,2.54l.75.75a.77.77,0,0,1,0,1.09.77.77,0,0,1-1.08,0l-.75-.75a3.34,3.34,0,0,1,0-4.72l3.83-3.84A4.39,4.39,0,0,1,16.72,7.5Zm-6.16,0A.76.76,0,1,0,9.48,8.53l.74.75a1.79,1.79,0,0,1,0,2.54L6.39,15.63a2.83,2.83,0,0,1-4,0,2.77,2.77,0,0,1-.84-2,2.8,2.8,0,0,1,.84-2l2-2A.77.77,0,1,0,3.33,8.47l-2,2a4.39,4.39,0,0,0,6.19,6.23l3.82-3.82a3.32,3.32,0,0,0,0-4.72Z" fill={svgColor} />
      </svg>
    )
  }
}

IconLink.propTypes = {
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

IconLink.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconLink
