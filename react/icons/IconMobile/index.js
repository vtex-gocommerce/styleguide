import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconMobile extends PureComponent {
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
        <path  d="M12.5,1.5A.5.5,0,0,1,13,2V16a.5.5,0,0,1-.5.5h-7A.5.5,0,0,1,5,16V2a.5.5,0,0,1,.5-.5h7m0-1.5h-7a2,2,0,0,0-2,2V16a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2ZM9,13a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" fill={svgColor} />
      </svg>
    )
  }
}

IconMobile.propTypes = {
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

IconMobile.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconMobile
