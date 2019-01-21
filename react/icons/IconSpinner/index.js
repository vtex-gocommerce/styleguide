import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconSpinner extends PureComponent {
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
        <path  d="M10.5,1.5A1.5,1.5,0,1,1,9,0,1.5,1.5,0,0,1,10.5,1.5ZM9,15a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,9,15ZM3,9a1.5,1.5,0,1,0-1.5,1.5A1.5,1.5,0,0,0,3,9ZM16.5,7.5A1.5,1.5,0,1,0,18,9,1.5,1.5,0,0,0,16.5,7.5ZM2.64,2.64a1.49,1.49,0,0,0,0,2.12A1.5,1.5,0,1,0,4.76,2.64,1.49,1.49,0,0,0,2.64,2.64Zm10.6,10.6a1.51,1.51,0,0,0,0,2.12,1.5,1.5,0,1,0,2.12-2.12A1.51,1.51,0,0,0,13.24,13.24Zm-10.6,0a1.5,1.5,0,1,0,2.12,2.12,1.5,1.5,0,0,0-2.12-2.12Z" fill={svgColor} />
      </svg>
    )
  }
}

IconSpinner.propTypes = {
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

IconSpinner.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconSpinner
