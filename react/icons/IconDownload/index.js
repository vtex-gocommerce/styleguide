import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconDownload extends PureComponent {
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
        <path  d="M3.5,8.56a.75.75,0,0,1,1-1.12l3.75,3.38V0h1.5V10.82L13.5,7.44a.75.75,0,0,1,1,1.12l-5,4.5a.75.75,0,0,1-1,0ZM16.5,13v3a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5V13H0v3a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V13Z" fill={svgColor} />
      </svg>
    )
  }
}

IconDownload.propTypes = {
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

IconDownload.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconDownload
