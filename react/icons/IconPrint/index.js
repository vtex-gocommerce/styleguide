import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPrint extends PureComponent {
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
        <path  d="M5.5,10.25A1.25,1.25,0,1,1,4.25,9,1.25,1.25,0,0,1,5.5,10.25ZM18,9.5v3a2,2,0,0,1-2,2H14.5v2A1.5,1.5,0,0,1,13,18H5a1.5,1.5,0,0,1-1.5-1.5v-2H2a2,2,0,0,1-2-2v-3A3.5,3.5,0,0,1,3.5,6V1.5A1.5,1.5,0,0,1,5,0h6.5l3,3V6A3.5,3.5,0,0,1,18,9.5ZM5,6h8V3.62L10.88,1.5H5Zm8,8.5H5v2h8Zm3.5-5a2,2,0,0,0-2-2H3.5a2,2,0,0,0-2,2v3A.5.5,0,0,0,2,13H16a.5.5,0,0,0,.5-.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPrint.propTypes = {
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

IconPrint.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPrint
