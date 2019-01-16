import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconBold extends PureComponent {
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
        <path class="cls-2" d="M11.33,8.57V8.46c2.14-.49,2.42-1.76,2.42-2.7,0-1.77-1.47-3.51-4.2-3.51H4.5a1,1,0,0,0,0,2H5v9.5H4.5a1,1,0,0,0,0,2h5.73a3.93,3.93,0,0,0,4.27-4C14.5,10.11,13.71,8.83,11.33,8.57ZM9.55,4.25c1.74,0,2.2,1.07,2.2,1.64C11.75,7,10.54,7.83,9,7.83H7V4.25Zm.2,9.5H7V9.66H9.27c2,0,3.23.35,3.23,2.06C12.5,12.78,11.8,13.75,9.75,13.75Z" fill={svgColor} />
      </svg>
    )
  }
}

IconBold.propTypes = {
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

IconBold.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconBold
