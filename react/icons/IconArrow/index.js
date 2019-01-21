import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconArrow extends PureComponent {
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
        <path  d="M17.81,8.5,15.56,6a.75.75,0,0,0-1.06-.06A.76.76,0,0,0,14.44,7l1.17,1.3H9.7V2.39L11,3.56a.75.75,0,0,0,1.06-.06A.76.76,0,0,0,12,2.44L9.5.19a.76.76,0,0,0-1,0L6,2.44A.75.75,0,0,0,7,3.56L8.3,2.39V8.3H2.39L3.56,7A.76.76,0,0,0,3.5,5.94.75.75,0,0,0,2.44,6L.19,8.5a.76.76,0,0,0,0,1L2.44,12a.75.75,0,0,0,1.06.06A.76.76,0,0,0,3.56,11L2.39,9.7H8.3v5.91L7,14.44a.75.75,0,0,0-1,1.12l2.5,2.25a.75.75,0,0,0,1,0L12,15.56a.75.75,0,1,0-1-1.12L9.7,15.61V9.7h5.91L14.44,11a.76.76,0,0,0,.06,1.06A.75.75,0,0,0,15.56,12l2.25-2.5A.76.76,0,0,0,17.81,8.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconArrow.propTypes = {
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

IconArrow.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconArrow
