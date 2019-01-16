import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconMessenger extends PureComponent {
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
        <path id="Bubble_Shape" data-name="Bubble Shape" class="cls-2" d="M9,1.25A7.43,7.43,0,0,0,1.33,8.42,7,7,0,0,0,4.18,14v2.75L6.8,15.3a8.29,8.29,0,0,0,2.2.3,7.43,7.43,0,0,0,7.67-7.18A7.43,7.43,0,0,0,9,1.25Zm.81,9.62-2-2.06L4,10.92,8.19,6.48l2,2.06L14,6.42Z" fill={svgColor} />
      </svg>
    )
  }
}

IconMessenger.propTypes = {
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

IconMessenger.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconMessenger
