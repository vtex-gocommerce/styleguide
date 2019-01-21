import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconYoutube extends PureComponent {
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
        <path  d="M17.62,4.67A2.21,2.21,0,0,0,16,3.08,53.19,53.19,0,0,0,9,2.7a53.19,53.19,0,0,0-7,.38A2.21,2.21,0,0,0,.38,4.67,23.15,23.15,0,0,0,0,9a23.15,23.15,0,0,0,.38,4.33A2.21,2.21,0,0,0,2,14.92a53.19,53.19,0,0,0,7,.38,53.19,53.19,0,0,0,7-.38,2.21,2.21,0,0,0,1.59-1.59A23.15,23.15,0,0,0,18,9,23.15,23.15,0,0,0,17.62,4.67ZM7.2,11.7V6.3L11.88,9Z" fill={svgColor} />
      </svg>
    )
  }
}

IconYoutube.propTypes = {
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

IconYoutube.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconYoutube
