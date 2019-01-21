import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconBlog extends PureComponent {
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
        <path  d="M17.71,7.9l-6,5.95a.47.47,0,0,1-.35.15H9.5a.5.5,0,0,1-.5-.5V11.59a.47.47,0,0,1,.15-.35L15.1,5.29A1,1,0,0,1,15.8,5a1,1,0,0,1,.7.29L17.71,6.5A1,1,0,0,1,17.71,7.9ZM11.26,7H4V8h6.26ZM12,4H4V5h8ZM8.08,10.18,8.26,10H4v1H7.6A2,2,0,0,1,8.08,10.18ZM14.5,15A1.5,1.5,0,0,1,13,16.5H3A1.5,1.5,0,0,1,1.5,15V3A1.5,1.5,0,0,1,3,1.5H13A1.5,1.5,0,0,1,14.5,3v.87a2.46,2.46,0,0,1,1.3-.37H16V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V15a3,3,0,0,0,3,3H13a3,3,0,0,0,3-3V11.74l-1.5,1.5ZM4,13v1H7.57a2,2,0,0,1-.07-.5V13Z" fill={svgColor} />
      </svg>
    )
  }
}

IconBlog.propTypes = {
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

IconBlog.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconBlog
