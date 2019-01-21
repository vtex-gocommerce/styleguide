import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconEarth extends PureComponent {
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
        <path  d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0ZM1.5,9a7.48,7.48,0,0,1,.63-3l.68,2.74a2,2,0,0,0,.83,1.18L6,11.47l.08.06.21.22a.49.49,0,0,1,.09.57l-.2.4a.49.49,0,0,0,.05.53L7.4,14.87a.51.51,0,0,1,.1.3v1.18A7.52,7.52,0,0,1,1.5,9Zm7.67,7.49.3-.91a.64.64,0,0,1,.08-.14l1.29-1.73a.5.5,0,0,0,.08-.46l-.12-.34a.53.53,0,0,0-.19-.26l-1.33-.88-.06,0-1.75-.88a.49.49,0,0,0-.44,0L6.7,11A.5.5,0,0,1,6,10.8l-.21-.4a.4.4,0,0,0-.22-.22l-.08,0a.51.51,0,0,1,0-.87L7.71,7.78l.08-.07L9.05,6.45A.5.5,0,0,0,9.18,6L8.79,4.43a.6.6,0,0,1,0-.35l.31-.61a.49.49,0,0,0,0-.44l-.7-1.41-.07-.09q.32,0,.63,0a7.32,7.32,0,0,1,1.7.2l-.17.68a.49.49,0,0,0,0,.24l.29,1.15a.5.5,0,0,0,.78.28l1.28-1a.46.46,0,0,0,.17-.24l0-.13a7.38,7.38,0,0,1,1.77,1.62.46.46,0,0,0-.21.26l-.08.25a.49.49,0,0,0,.06.41l.7,1a.44.44,0,0,1,0,.49L15,7.36a.47.47,0,0,1-.66.18l-.56-.35a.47.47,0,0,0-.66.61l.26.53a.43.43,0,0,1,0,.35L13,10v0l-.45,1.76a.51.51,0,0,0,.08.4l1.3,1.73a.46.46,0,0,0,.17.14l.29.15A7.41,7.41,0,0,1,9.17,16.49Z" fill={svgColor} />
      </svg>
    )
  }
}

IconEarth.propTypes = {
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

IconEarth.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconEarth
