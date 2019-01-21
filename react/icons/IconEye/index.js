import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconEye extends PureComponent {
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
        <path  d="M9,2.5c-6,0-9,5-9,6.5s3,6.5,9,6.5,9-5,9-6.5S15,2.5,9,2.5ZM10,5A2,2,0,1,1,8,7,2,2,0,0,1,10,5ZM9,14A7.88,7.88,0,0,1,1.5,9,7.4,7.4,0,0,1,5.17,4.93,4.83,4.83,0,0,0,4.5,7.5,4.2,4.2,0,0,0,9,12q4.5,0,4.5-4.5a4.83,4.83,0,0,0-.67-2.57A7.4,7.4,0,0,1,16.5,9,7.88,7.88,0,0,1,9,14Z" fill={svgColor} />
      </svg>
    )
  }
}

IconEye.propTypes = {
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

IconEye.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconEye
