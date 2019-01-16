import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconBarcodeRead extends PureComponent {
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
        <path class="cls-2" d="M5.5,3.5h-3a1,1,0,0,0-1,1v3H0v-3A2.5,2.5,0,0,1,2.5,2h3ZM18,7.5v-3A2.5,2.5,0,0,0,15.5,2h-3V3.5h3a1,1,0,0,1,1,1v3Zm-12.5,7h-3a1,1,0,0,1-1-1v-3H0v3A2.5,2.5,0,0,0,2.5,16h3Zm11-4v3a1,1,0,0,1-1,1h-3V16h3A2.5,2.5,0,0,0,18,13.5v-3ZM6,6H4v6H6ZM8.5,6h-1v6h1ZM12,6H10v6h2Zm2,0H13v6h1Z" fill={svgColor} />
      </svg>
    )
  }
}

IconBarcodeRead.propTypes = {
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

IconBarcodeRead.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconBarcodeRead
