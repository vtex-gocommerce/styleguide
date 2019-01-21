import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconImport extends PureComponent {
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
        <path  d="M17.41,3.41,14.59.59A2,2,0,0,0,13.17,0H5A2,2,0,0,0,3,2V3H4.5V2A.5.5,0,0,1,5,1.5h6.25V5A1.76,1.76,0,0,0,13,6.75h3.5V16a.5.5,0,0,1-.5.5H5a.5.5,0,0,1-.5-.5V15H3v1a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4.83A2,2,0,0,0,17.41,3.41ZM13,5.25A.25.25,0,0,1,12.75,5V1.5h.42a.49.49,0,0,1,.36.15l2.82,2.82a.49.49,0,0,1,.15.36v.42ZM6,9.75H0V8.25H6L4,6a.75.75,0,0,1,1.1-1L8.3,8.49a.74.74,0,0,1,0,1L5.05,13a.75.75,0,0,1-.55.24.76.76,0,0,1-.51-.2A.76.76,0,0,1,4,12Z" fill={svgColor} />
      </svg>
    )
  }
}

IconImport.propTypes = {
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

IconImport.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconImport
