import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTwitter extends PureComponent {
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
        <path class="cls-2" d="M6.81,15.49a9,9,0,0,0,9.05-9c0-.14,0-.28,0-.41a6.57,6.57,0,0,0,1.59-1.65,6.2,6.2,0,0,1-1.83.5A3.15,3.15,0,0,0,17,3.12a6.34,6.34,0,0,1-2,.78,3.18,3.18,0,0,0-5.5,2.17,3.55,3.55,0,0,0,.08.73A9,9,0,0,1,3,3.47a3.12,3.12,0,0,0-.43,1.6A3.19,3.19,0,0,0,4,7.72a3.2,3.2,0,0,1-1.44-.4v0a3.19,3.19,0,0,0,2.55,3.12,3.28,3.28,0,0,1-.84.11,2.88,2.88,0,0,1-.59-.06,3.16,3.16,0,0,0,3,2.21A6.4,6.4,0,0,1,2.7,14.1a6.34,6.34,0,0,1-.76,0,9,9,0,0,0,4.87,1.43" fill={svgColor} />
      </svg>
    )
  }
}

IconTwitter.propTypes = {
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

IconTwitter.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTwitter
