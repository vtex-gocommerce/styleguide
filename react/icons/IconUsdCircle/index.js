import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconUsdCircle extends PureComponent {
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
        <path class="cls-2" d="M6.65,7.5a.85.85,0,0,0,.85.85h3a2.15,2.15,0,0,1,0,4.3H9.75V14.5H8.25V12.65H7A1.65,1.65,0,0,1,5.35,11v-.5h1.3V11a.35.35,0,0,0,.35.35h3.5a.85.85,0,0,0,0-1.7h-3a2.15,2.15,0,0,1,0-4.3h.75V3.5h1.5V5.35h.75A2.15,2.15,0,0,1,12.65,7.5h-1.3a.85.85,0,0,0-.85-.85h-3A.85.85,0,0,0,6.65,7.5ZM18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9ZM16.5,9A7.5,7.5,0,1,0,9,16.5,7.5,7.5,0,0,0,16.5,9Z" fill={svgColor} />
      </svg>
    )
  }
}

IconUsdCircle.propTypes = {
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

IconUsdCircle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconUsdCircle
