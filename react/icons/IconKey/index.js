import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconKey extends PureComponent {
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
        <path class="cls-2" d="M12.5,0h-.13a5.59,5.59,0,0,0-5,3.6,5.29,5.29,0,0,0-.31,2.65,1,1,0,0,1-.28.83L.24,13.61A.87.87,0,0,0,0,14.2v3A.83.83,0,0,0,.83,18h3a.63.63,0,0,0,.59-.57V15.86a.09.09,0,0,1,.1-.1h1.8a.1.1,0,0,0,.1-.1v-1.8a.09.09,0,0,1,.1-.1h1.8a.1.1,0,0,0,.1-.1v-1.8a.09.09,0,0,1,.1-.1h1.69a.53.53,0,0,0,.36-.15l.38-.38a1,1,0,0,1,.7-.29h.13a6.16,6.16,0,0,0,.75.05,5.27,5.27,0,0,0,1.9-.36,5.59,5.59,0,0,0,3.6-5A5.5,5.5,0,0,0,12.5,0Zm1.39,9.33a3.77,3.77,0,0,1-1.39.27,3.39,3.39,0,0,1-.55,0,1.83,1.83,0,0,0-.33,0,2.38,2.38,0,0,0-1.69.7l-.12.12H8.49A1.5,1.5,0,0,0,7,11.86v.5h-.5A1.5,1.5,0,0,0,5,13.86v.5h-.5A1.5,1.5,0,0,0,3,15.86v.74H1.4V14.43L7.76,8.07a2.4,2.4,0,0,0,.68-2,3.68,3.68,0,0,1,.23-1.94A4.2,4.2,0,0,1,12.4,1.4h.1a4.11,4.11,0,0,1,4.1,4.2A4.2,4.2,0,0,1,13.89,9.33Zm.47-4.69a1,1,0,1,1-1-1A1,1,0,0,1,14.36,4.64Z" fill={svgColor} />
      </svg>
    )
  }
}

IconKey.propTypes = {
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

IconKey.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconKey
