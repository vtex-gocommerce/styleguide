import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconListOl extends PureComponent {
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
        <path class="cls-2" d="M2,15.81a2.21,2.21,0,0,0,1.19.31,1.45,1.45,0,0,0,1.61-1.46,1.2,1.2,0,0,0-.95-1.16l.58-.66a.68.68,0,0,0,.17-.47v-.11a.34.34,0,0,0-.38-.38H2.29a.34.34,0,0,0-.38.38v.29a.34.34,0,0,0,.38.37h.43a2.24,2.24,0,0,0,.42,0h0a5.34,5.34,0,0,0-.41.45l-.18.23a.43.43,0,0,0-.1.49l0,.07a.41.41,0,0,0,.41.26h.15c.35,0,.53.08.53.3s-.14.27-.47.27a1.18,1.18,0,0,1-.48-.1c-.22-.13-.39-.12-.52.1l-.18.31A.36.36,0,0,0,2,15.81Zm-.19-5.07a.36.36,0,0,0,.4.38H4.47a.34.34,0,0,0,.38-.38v-.29a.34.34,0,0,0-.38-.37H3.17c.07-.35,1.62-.62,1.62-1.89A1.35,1.35,0,0,0,3.31,6.88,1.62,1.62,0,0,0,2,7.5a.33.33,0,0,0,.1.51l.28.23c.19.15.37.08.53-.08A.43.43,0,0,1,3.2,8a.28.28,0,0,1,.31.29c0,.42-1.69.72-1.69,2.29Zm0-5a.34.34,0,0,0,.38.38H4.47a.34.34,0,0,0,.38-.38v-.3a.34.34,0,0,0-.38-.38H4V2.26a.34.34,0,0,0-.39-.38h-.4a.63.63,0,0,0-.48.19L2,2.73a.34.34,0,0,0,0,.54l.19.21a.34.34,0,0,0,.52,0,1.2,1.2,0,0,0,.09-.12h0s0,.18,0,.35V5.06H2.23a.34.34,0,0,0-.38.38ZM6,5H16V3H6Zm0,5H16V8H6Zm0,5H16V13H6Z" fill={svgColor} />
      </svg>
    )
  }
}

IconListOl.propTypes = {
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

IconListOl.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconListOl
