import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconExport extends PureComponent {
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
        <path  d="M13.5,16a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5V6.75H5A1.76,1.76,0,0,0,6.75,5V1.5H13a.5.5,0,0,1,.5.5V3H15V2a2,2,0,0,0-2-2H4.83A2,2,0,0,0,3.41.59L.59,3.41A2,2,0,0,0,0,4.83V16a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V15H13.5ZM1.5,4.83a.49.49,0,0,1,.15-.36L4.47,1.65a.49.49,0,0,1,.36-.15h.42V5A.25.25,0,0,1,5,5.25H1.5ZM17.8,9.51,14.55,13a.75.75,0,0,1-.55.24.76.76,0,0,1-.51-.2.76.76,0,0,1,0-1.06l2.08-2.24h-6V8.25h6L13.45,6a.75.75,0,0,1,1.1-1l3.25,3.5A.74.74,0,0,1,17.8,9.51Z" fill={svgColor} />
      </svg>
    )
  }
}

IconExport.propTypes = {
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

IconExport.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconExport
