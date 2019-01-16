import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTimesCircle extends PureComponent {
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
        <path class="cls-2" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0ZM9,16.5A7.5,7.5,0,1,1,16.5,9,7.5,7.5,0,0,1,9,16.5Zm4.53-11L10.06,9l3.47,3.47-1.06,1.06L9,10.06,5.53,13.53,4.47,12.47,7.94,9,4.47,5.53,5.53,4.47,9,7.94l3.47-3.47Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTimesCircle.propTypes = {
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

IconTimesCircle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTimesCircle
