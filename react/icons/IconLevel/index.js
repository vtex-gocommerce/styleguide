import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconLevel extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, animate } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg 
        className={`${className} ${animate ? styles.iconAnimate : ''}`}
        { ...style }
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.60377 7.08015L8.62236 8.06156L10.3749 9.81407H2.10302C1.68241 9.81407 1.40201 9.53367 1.40201 9.11307V0H0V9.11307C0 10.3048 0.911307 11.2161 2.10302 11.2161H10.3749L8.62236 12.9686L9.60377 13.95L13.0387 10.5151L9.60377 7.08015Z" fill={svgColor} />
      </svg>
    )
  }
}

IconLevel.propTypes = {
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

IconLevel.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconLevel
