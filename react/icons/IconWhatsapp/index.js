import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconWhatsapp extends PureComponent {
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
        <g id="WA_Logo" data-name="WA Logo"><path class="cls-2" d="M14.1,3.87A7.2,7.2,0,0,0,9,1.73,7.3,7.3,0,0,0,1.68,9a7.21,7.21,0,0,0,1,3.63l-1,3.77,3.86-1A7.26,7.26,0,0,0,9,16.29H9A7.29,7.29,0,0,0,16.23,9,7.19,7.19,0,0,0,14.1,3.87ZM9,15.06H9a6,6,0,0,1-3.08-.85l-.22-.13-2.29.6L4,12.45l-.14-.23A6,6,0,0,1,2.91,9,6.05,6.05,0,0,1,13.24,4.73,6.06,6.06,0,0,1,9,15.06Zm3.32-4.53c-.19-.09-1.08-.53-1.25-.59s-.28-.09-.41.09-.47.59-.57.71-.21.14-.39,0a5,5,0,0,1-1.47-.91,5.6,5.6,0,0,1-1-1.25c-.1-.19,0-.28.08-.38s.18-.21.27-.31a1.13,1.13,0,0,0,.19-.31.33.33,0,0,0,0-.32L7.14,6c-.15-.35-.3-.3-.41-.31H6.38a.66.66,0,0,0-.48.22,2.06,2.06,0,0,0-.64,1.52A3.56,3.56,0,0,0,6,9.27,8.2,8.2,0,0,0,9.11,12a10.82,10.82,0,0,0,1,.39,2.4,2.4,0,0,0,1.14.07,1.87,1.87,0,0,0,1.23-.86,1.48,1.48,0,0,0,.1-.87C12.58,10.67,12.46,10.62,12.28,10.53Z" fill={svgColor} /></g>
      </svg>
    )
  }
}

IconWhatsapp.propTypes = {
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

IconWhatsapp.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconWhatsapp
