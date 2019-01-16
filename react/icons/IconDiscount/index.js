import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconDiscount extends PureComponent {
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
        <path class="cls-2" d="M9,1.77l.81.94.45.52a.48.48,0,0,0,.54.14l.65-.22,1.16-.41L12.84,4l.13.67a.51.51,0,0,0,.4.4l.67.13,1.22.23-.41,1.16-.22.65a.48.48,0,0,0,.14.54l.52.45.94.81-.94.81-.52.45a.48.48,0,0,0-.14.54l.22.65.41,1.16L14,12.84l-.67.13a.51.51,0,0,0-.4.4l-.13.67-.23,1.22-1.16-.41-.65-.22a.48.48,0,0,0-.54.14l-.45.52L9,16.23l-.81-.94-.45-.52a.48.48,0,0,0-.54-.14l-.65.22-1.16.41L5.16,14,5,13.37a.51.51,0,0,0-.4-.4L4,12.84l-1.22-.23.41-1.16.22-.65a.48.48,0,0,0-.14-.54l-.52-.45L1.77,9l.94-.81.52-.45a.48.48,0,0,0,.14-.54l-.22-.65L2.74,5.39,4,5.16,4.63,5a.51.51,0,0,0,.4-.4L5.16,4l.23-1.22,1.16.41.65.22a.48.48,0,0,0,.54-.14l.45-.52L9,1.77m-1.95,0-1.72-.6A1,1,0,0,0,4,1.89L3.68,3.68,1.89,4a1,1,0,0,0-.76,1.31l.6,1.72L.35,8.24a1,1,0,0,0,0,1.52L1.73,11l-.6,1.72A1,1,0,0,0,1.89,14l1.79.34L4,16.11a1,1,0,0,0,1.31.76l1.72-.6,1.19,1.38a1,1,0,0,0,1.52,0L11,16.27l1.72.6A1,1,0,0,0,14,16.11l.34-1.79L16.11,14a1,1,0,0,0,.76-1.31L16.27,11l1.38-1.19a1,1,0,0,0,0-1.52L16.27,7.05l.6-1.72A1,1,0,0,0,16.11,4l-1.79-.34L14,1.89a1,1,0,0,0-1.31-.76L11,1.73,9.76.35a1,1,0,0,0-1.52,0ZM10.77,5.5h.86a.2.2,0,0,1,.17.31L7.65,12.27a.5.5,0,0,1-.42.23H6.37a.2.2,0,0,1-.17-.31l4.15-6.46A.5.5,0,0,1,10.77,5.5Zm.48,4.5a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,11.25,10ZM6.75,5.5A1.25,1.25,0,1,0,8,6.75,1.25,1.25,0,0,0,6.75,5.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconDiscount.propTypes = {
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

IconDiscount.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconDiscount
