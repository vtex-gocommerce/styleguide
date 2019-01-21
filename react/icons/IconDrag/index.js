import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconDrag extends PureComponent {
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
        <path  d="M6,10.5A1.5,1.5,0,1,1,7.5,9,1.5,1.5,0,0,1,6,10.5ZM13.5,9A1.5,1.5,0,1,0,12,10.5,1.5,1.5,0,0,0,13.5,9Zm-6-6A1.5,1.5,0,1,0,6,4.5,1.5,1.5,0,0,0,7.5,3Zm6,0A1.5,1.5,0,1,0,12,4.5,1.5,1.5,0,0,0,13.5,3Zm-6,12A1.5,1.5,0,1,0,6,16.5,1.5,1.5,0,0,0,7.5,15Zm6,0A1.5,1.5,0,1,0,12,16.5,1.5,1.5,0,0,0,13.5,15Z" fill={svgColor} />
      </svg>
    )
  }
}

IconDrag.propTypes = {
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

IconDrag.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconDrag
