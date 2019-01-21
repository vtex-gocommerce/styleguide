import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconGoogle extends PureComponent {
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
        <path  d="M16.21,7.64H9.15v2.9h4a3.5,3.5,0,0,1-1.5,2.26A4.52,4.52,0,1,1,9.15,4.48,4.08,4.08,0,0,1,12,5.6l2.15-2.15a7.22,7.22,0,0,0-5-1.95,7.5,7.5,0,0,0,0,15,7.14,7.14,0,0,0,5-1.82,7.3,7.3,0,0,0,2.24-5.51A8.45,8.45,0,0,0,16.21,7.64Z" fill={svgColor} />
      </svg>
    )
  }
}

IconGoogle.propTypes = {
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

IconGoogle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconGoogle
