import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconWeight extends PureComponent {
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
        <path  d="M0,12v6H18V12Zm16.7,4.7H1.3V13.3H2.5V15h1V13.3h2V15h1V13.3h2V15h1V13.3h2V15h1V13.3h2V15h1V13.3h1.2ZM4,10H14a1,1,0,0,0,1-1.26l-1.19-4.5a1,1,0,0,0-1-.74H11.25V2.25a2.25,2.25,0,0,0-4.5,0V3.5H5.22a1,1,0,0,0-1,.74L3.06,8.74A1,1,0,0,0,4,10ZM8,2.25a1,1,0,0,1,2,0V3.5H8ZM5.6,5h6.8l.92,3.5H4.68Z" fill={svgColor} />
      </svg>
    )
  }
}

IconWeight.propTypes = {
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

IconWeight.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconWeight
