import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconStrikethrough extends PureComponent {
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
        <path  d="M13.83,10.3a3.27,3.27,0,0,1,.36,1.54,3.6,3.6,0,0,1-.59,2,3.88,3.88,0,0,1-1.72,1.43,6,6,0,0,1-2.51.52,7.6,7.6,0,0,1-3-.52,4.16,4.16,0,0,1-1.88-1.55,4.32,4.32,0,0,1-.67-1.81.51.51,0,0,1,.45-.58L5,11.23a.49.49,0,0,1,.52.38A3.57,3.57,0,0,0,6,12.8a3,3,0,0,0,1.32,1,4.92,4.92,0,0,0,2,.39A4.66,4.66,0,0,0,11,13.9a2.38,2.38,0,0,0,1.13-.8A1.84,1.84,0,0,0,12.53,12a1.67,1.67,0,0,0-.36-1.07,2.33,2.33,0,0,0-.79-.61ZM5,7.8H9a6.58,6.58,0,0,1-2.52-.91A1.48,1.48,0,0,1,6,5.73a1.71,1.71,0,0,1,.72-1.38A3.63,3.63,0,0,1,9,3.78a3.51,3.51,0,0,1,2.27.63,2.49,2.49,0,0,1,.84,1.45.49.49,0,0,0,.52.38l.69,0a.51.51,0,0,0,.46-.58,3.82,3.82,0,0,0-.59-1.51,3.71,3.71,0,0,0-1.7-1.38A6.6,6.6,0,0,0,8.9,2.25a6.18,6.18,0,0,0-2.4.45A3.5,3.5,0,0,0,4.87,4a3.29,3.29,0,0,0-.56,1.85,3,3,0,0,0,.45,1.62A2.85,2.85,0,0,0,5,7.8ZM2,9.55H16a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H2a.5.5,0,0,0-.5.5A.5.5,0,0,0,2,9.55Z" fill={svgColor} />
      </svg>
    )
  }
}

IconStrikethrough.propTypes = {
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

IconStrikethrough.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconStrikethrough
