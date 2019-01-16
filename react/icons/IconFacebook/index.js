import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconFacebook extends PureComponent {
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
        <path class="cls-2" d="M15.23,2H2.77A.78.78,0,0,0,2,2.77V15.23a.78.78,0,0,0,.77.77H9.48V10.59H7.66V8.47H9.48V6.91a2.55,2.55,0,0,1,2.72-2.8,14.84,14.84,0,0,1,1.63.09V6.09H12.72c-.88,0-1.05.41-1.05,1V8.46h2.1l-.28,2.12H11.66V16h3.57a.78.78,0,0,0,.77-.77h0V2.77A.78.78,0,0,0,15.23,2Z" fill={svgColor} />
      </svg>
    )
  }
}

IconFacebook.propTypes = {
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

IconFacebook.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconFacebook
