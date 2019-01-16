import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconProduct extends PureComponent {
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
        <path class="cls-2" d="M11,14.19v-2l3.5-1.5v2Zm7-9.08v7.78a2,2,0,0,1-1.19,1.83l-7,3.11a2,2,0,0,1-1.62,0l-7-3.11A2,2,0,0,1,0,12.89V5.11A2,2,0,0,1,1.19,3.28l7-3.11a2,2,0,0,1,1.62,0l7,3.11A2,2,0,0,1,18,5.11ZM6.18,2.7l7.43,3.06,2.63-1.08,0,0-7-3.11a.52.52,0,0,0-.4,0Zm-4.42,2L9,7.66l3.17-1.3-7.38-3-3,1.33ZM8.25,16.21V8.65L1.5,5.87v7a.51.51,0,0,0,.3.46ZM16.5,5.87,9.75,8.65v7.56l6.45-2.86a.51.51,0,0,0,.3-.46Z" fill={svgColor} />
      </svg>
    )
  }
}

IconProduct.propTypes = {
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

IconProduct.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconProduct
