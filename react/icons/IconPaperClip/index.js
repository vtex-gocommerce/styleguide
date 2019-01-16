import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPaperClip extends PureComponent {
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
        <path class="cls-2" d="M6.3,18A5.34,5.34,0,0,1,2.54,8.9l7.74-7.75a4,4,0,0,1,5.58,0,3.94,3.94,0,0,1-.06,5.64L7.88,14.4A2.36,2.36,0,1,1,4.64,11l6.09-5.71,1,1.09-6.1,5.72a.86.86,0,0,0,1.18,1.24l7.93-7.61A2.48,2.48,0,0,0,15.52,4a2.43,2.43,0,0,0-.72-1.76,2.46,2.46,0,0,0-3.46,0L3.6,10a3.83,3.83,0,0,0,0,5.41,3.79,3.79,0,0,0,5.34.06l6.36-6,1,1.09-6.36,6A5.28,5.28,0,0,1,6.3,18Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPaperClip.propTypes = {
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

IconPaperClip.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPaperClip
