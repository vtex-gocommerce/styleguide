import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTruck extends PureComponent {
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
        <path  d="M17.56,7.06,13.94,3.44A1.5,1.5,0,0,0,12.88,3H11V2.5A1.5,1.5,0,0,0,9.5,1h-8A1.5,1.5,0,0,0,0,2.5v10A1.5,1.5,0,0,0,1.5,14h.29a4,4,0,0,0,0,.5,3,3,0,0,0,6,0,4,4,0,0,0,0-.5h3.08a4,4,0,0,0,0,.5,3,3,0,0,0,6,0A3,3,0,0,0,16.7,14,1.5,1.5,0,0,0,18,12.5V8.12A1.5,1.5,0,0,0,17.56,7.06ZM4.75,16.4a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,4.75,16.4ZM9.5,3v9.5H7a3,3,0,0,0-4.46,0h-1V2.5h8ZM11,4.5h1.88l3,3H11Zm2.75,11.9a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,13.75,16.4Zm0-4.9a3,3,0,0,0-2.23,1H11v-4h5.5v4H16A3,3,0,0,0,13.75,11.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTruck.propTypes = {
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

IconTruck.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTruck
