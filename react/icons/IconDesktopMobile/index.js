import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconDesktopMobile extends PureComponent {
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
        <path  d="M8.5,18h-7V16.5H4.94L6,13H2a2,2,0,0,1-2-2V4A2,2,0,0,1,2,2H14a2,2,0,0,1,2,2V5.5H14.5V4a.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5H8.5V13H7.56l-1,3.5h2Zm8-9.5h-5v8h5v-8m0-1.5A1.5,1.5,0,0,1,18,8.5v8A1.5,1.5,0,0,1,16.5,18h-5A1.5,1.5,0,0,1,10,16.5v-8A1.5,1.5,0,0,1,11.5,7ZM14,14a.75.75,0,1,0,.75.75A.76.76,0,0,0,14,14Z" fill={svgColor} />
      </svg>
    )
  }
}

IconDesktopMobile.propTypes = {
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

IconDesktopMobile.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconDesktopMobile
