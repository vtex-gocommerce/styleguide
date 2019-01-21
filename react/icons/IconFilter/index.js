import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconFilter extends PureComponent {
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
        <path  d="M15.57,1.5a.86.86,0,0,1,.85.61.86.86,0,0,1-.3,1L11.38,6.78A3.49,3.49,0,0,0,10,9.55v6.68l-1.76-.89A.47.47,0,0,1,8,14.9V9.55A3.53,3.53,0,0,0,6.63,6.78L1.88,3.11a.86.86,0,0,1-.3-1,.86.86,0,0,1,.85-.61H15.57m0-1.5H2.43A2.4,2.4,0,0,0,1,4.3L5.71,8a2,2,0,0,1,.77,1.58v5.34a2,2,0,0,0,1.1,1.8l2.35,1.17a1.11,1.11,0,0,0,1.59-1V9.55A2,2,0,0,1,12.3,8L17,4.3A2.4,2.4,0,0,0,15.57,0Z" fill={svgColor} />
      </svg>
    )
  }
}

IconFilter.propTypes = {
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

IconFilter.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconFilter
