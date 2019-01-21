import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconFont extends PureComponent {
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
        <path  d="M15.38,14.22h-.54L10.45,3a1.39,1.39,0,0,0-1.29-.88H8.84A1.39,1.39,0,0,0,7.55,3L3.16,14.22H2.62a.77.77,0,1,0,0,1.53H5.68a.77.77,0,1,0,0-1.53H5l1.1-2.81h5.74L13,14.22h-.65a.77.77,0,1,0,0,1.53h3.06a.77.77,0,1,0,0-1.53ZM6.72,9.88,9,4.07l2.27,5.81Z" fill={svgColor} />
      </svg>
    )
  }
}

IconFont.propTypes = {
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

IconFont.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconFont
