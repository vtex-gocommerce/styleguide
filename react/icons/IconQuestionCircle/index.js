import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconQuestionCircle extends PureComponent {
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
        <path class="cls-2" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0ZM9,16.5A7.5,7.5,0,1,1,16.5,9,7.5,7.5,0,0,1,9,16.5ZM11.75,6v.38A2.27,2.27,0,0,1,11.09,8L10,9.09a.75.75,0,0,0-.22.53V10H8.25V9.62A2.27,2.27,0,0,1,8.91,8L10,6.91a.75.75,0,0,0,.22-.53V6a.76.76,0,0,0-.75-.75h-1A.76.76,0,0,0,7.75,6v.5H6.25V6A2.25,2.25,0,0,1,8.5,3.75h1A2.25,2.25,0,0,1,11.75,6Zm-1.5,6.75A1.25,1.25,0,1,1,9,11.5,1.25,1.25,0,0,1,10.25,12.75Z" fill={svgColor} />
      </svg>
    )
  }
}

IconQuestionCircle.propTypes = {
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

IconQuestionCircle.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconQuestionCircle
