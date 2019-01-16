import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconLightbulb extends PureComponent {
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
        <path class="cls-2" d="M4.75,6.5h1.5A2.25,2.25,0,0,1,8.5,4.25V2.75A3.75,3.75,0,0,0,4.75,6.5Z" fill={svgColor} /><path class="cls-2" d="M10,0H8A6,6,0,0,0,2,6v.26a8,8,0,0,0,1.69,4.91l.94,1.22a5,5,0,0,1,1,2.51l.14,1.32a2,2,0,0,0,2,1.78h2.42a2,2,0,0,0,2-1.78l.14-1.32a5,5,0,0,1,1-2.51l.94-1.22A8,8,0,0,0,16,6.26V6A6,6,0,0,0,10,0Zm.71,16.06a.5.5,0,0,1-.5.44H7.79a.5.5,0,0,1-.5-.44l-.14-1.32A6,6,0,0,0,7,14h4a6,6,0,0,0-.14.74Zm3.79-9.8a6.58,6.58,0,0,1-1.37,4l-1,1.21a6.61,6.61,0,0,0-.64,1H6.46a6.61,6.61,0,0,0-.64-1l-1-1.21a6.58,6.58,0,0,1-1.37-4V6A4.51,4.51,0,0,1,8,1.5h2A4.51,4.51,0,0,1,14.5,6Z" fill={svgColor} />
      </svg>
    )
  }
}

IconLightbulb.propTypes = {
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

IconLightbulb.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconLightbulb
