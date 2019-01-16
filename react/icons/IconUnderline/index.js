import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconUnderline extends PureComponent {
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
        <path class="cls-2" d="M4.25,4h.4V8.5A3.86,3.86,0,0,0,8.5,12.35h1A3.86,3.86,0,0,0,13.35,8.5V4h.4a.75.75,0,0,0,0-1.5h-3a.75.75,0,0,0,0,1.5h.9V8.5A2.15,2.15,0,0,1,9.5,10.65h-1A2.15,2.15,0,0,1,6.35,8.5V4h.9a.75.75,0,0,0,0-1.5h-3a.75.75,0,0,0,0,1.5Z" fill={svgColor} /><path class="cls-2" d="M14.75,14H3.25a.75.75,0,0,0,0,1.5h11.5a.75.75,0,0,0,0-1.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconUnderline.propTypes = {
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

IconUnderline.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconUnderline
