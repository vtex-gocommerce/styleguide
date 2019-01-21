import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconNav extends PureComponent {
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
        <path  d="M16,10H2a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,2,8H16a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,16,10Zm.5-6.5v-1A.5.5,0,0,0,16,2H2a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,2,4H16A.5.5,0,0,0,16.5,3.5Zm0,12v-1A.5.5,0,0,0,16,14H2a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,2,16H16A.5.5,0,0,0,16.5,15.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconNav.propTypes = {
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

IconNav.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconNav
