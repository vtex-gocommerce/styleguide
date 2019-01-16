import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconFlag extends PureComponent {
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
        <path class="cls-2" d="M16.5,2.5H2.61A1.5,1.5,0,1,0,0,1.5,1.49,1.49,0,0,0,.75,2.79V18h1.5V14H16.5A1.5,1.5,0,0,0,18,12.5V4A1.5,1.5,0,0,0,16.5,2.5Zm0,10H2.25V4H16.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconFlag.propTypes = {
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

IconFlag.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconFlag
