import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconExternalLink extends PureComponent {
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
        <path  d="M13.5,11,15,9.5v6A2.5,2.5,0,0,1,12.5,18H2.5A2.5,2.5,0,0,1,0,15.5V5.5A2.5,2.5,0,0,1,2.5,3h6L7,4.5H2.5a1,1,0,0,0-1,1v10a1,1,0,0,0,1,1h10a1,1,0,0,0,1-1ZM17,0H11.25a.76.76,0,0,0-.75.75.76.76,0,0,0,.75.75h4.19L7,10,8,11,16.5,2.56V6.75a.75.75,0,0,0,1.5,0V1A1,1,0,0,0,17,0Z" fill={svgColor} />
      </svg>
    )
  }
}

IconExternalLink.propTypes = {
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

IconExternalLink.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconExternalLink
