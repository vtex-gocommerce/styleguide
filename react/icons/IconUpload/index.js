import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconUpload extends PureComponent {
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
        <path  d="M3.44,5.77A.76.76,0,0,1,3.5,4.71l5-4.5a.74.74,0,0,1,1,0l5,4.5a.76.76,0,0,1,.06,1.06A.77.77,0,0,1,14,6a.74.74,0,0,1-.5-.2L9.75,2.45V13.5H8.25v-11L4.5,5.82A.75.75,0,0,1,3.44,5.77ZM16.5,13v3a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5V13H0v3a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V13Z" fill={svgColor} />
      </svg>
    )
  }
}

IconUpload.propTypes = {
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

IconUpload.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconUpload
