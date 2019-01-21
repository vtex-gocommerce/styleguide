import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconExclamationTriangle extends PureComponent {
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
        <path  d="M10.25,13.25A1.25,1.25,0,1,1,9,12,1.25,1.25,0,0,1,10.25,13.25ZM8.7,11h.6a.5.5,0,0,0,.5-.44l.33-2.95a1,1,0,0,0-1-1.11H8.87a1,1,0,0,0-1,1.11l.33,3A.5.5,0,0,0,8.7,11ZM16,16.86H2.05a2.05,2.05,0,0,1-1.76-3.1l7-11.65a2,2,0,0,1,3.42,0l7,11.65A2.05,2.05,0,0,1,16,16.86Zm.47-2.32-7-11.66a.49.49,0,0,0-.84,0l-7,11.66a.54.54,0,0,0,0,.54.52.52,0,0,0,.48.28H16a.52.52,0,0,0,.48-.28A.54.54,0,0,0,16.42,14.54Z" fill={svgColor} />
      </svg>
    )
  }
}

IconExclamationTriangle.propTypes = {
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

IconExclamationTriangle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconExclamationTriangle
