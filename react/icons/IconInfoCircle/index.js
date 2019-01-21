import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconInfoCircle extends PureComponent {
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
        <path  d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0ZM9,16.5A7.5,7.5,0,1,1,16.5,9,7.5,7.5,0,0,1,9,16.5Z" fill={svgColor} /><polygon  points="10 9.5 10 8 8 8 6.5 8 6.5 9.5 8 9.5 8 11.5 6.5 11.5 6.5 13 8 13 10 13 11.5 13 11.5 11.5 10 11.5 10 9.5" fill={svgColor} /><circle  cx="9" cy="5.5" r="1.5" fill={svgColor} />
      </svg>
    )
  }
}

IconInfoCircle.propTypes = {
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

IconInfoCircle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconInfoCircle
