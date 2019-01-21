import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconExchange extends PureComponent {
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
        <path  d="M17.8,5.51,14.55,9a.75.75,0,0,1-.55.24.76.76,0,0,1-.51-.2.76.76,0,0,1,0-1.06l2.08-2.24H1.12V4.25H15.53L13.45,2a.75.75,0,1,1,1.1-1l3.25,3.5A.74.74,0,0,1,17.8,5.51ZM4.55,10a.75.75,0,1,0-1.1-1L.2,12.49a.74.74,0,0,0,0,1L3.45,17a.75.75,0,0,0,.55.24.76.76,0,0,0,.51-.2.76.76,0,0,0,0-1.06L2.47,13.75H16.88v-1.5H2.47Z" fill={svgColor} />
      </svg>
    )
  }
}

IconExchange.propTypes = {
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

IconExchange.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconExchange
