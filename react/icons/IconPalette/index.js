import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPalette extends PureComponent {
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
        <path class="cls-2" d="M9,0A9,9,0,0,0,9,18c2,0,3-.65,3-2.5A3.42,3.42,0,0,1,15.5,12c2,0,2.5-1.5,2.5-3.5C18,4,14,0,9,0Zm6.5,10.5a4.89,4.89,0,0,0-5,5c0,.69,0,1-1.5,1a7.5,7.5,0,0,1,0-15c4.07,0,7.5,3.21,7.5,7C16.5,10.5,16,10.5,15.5,10.5ZM10,4.5A1.5,1.5,0,1,1,8.5,3,1.5,1.5,0,0,1,10,4.5Zm4,2A1.5,1.5,0,1,1,12.5,5,1.5,1.5,0,0,1,14,6.5ZM5,9A1.5,1.5,0,1,1,6.5,7.5,1.5,1.5,0,0,1,5,9Zm2.5,3A1.5,1.5,0,1,1,6,10.5,1.5,1.5,0,0,1,7.5,12Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPalette.propTypes = {
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

IconPalette.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPalette
