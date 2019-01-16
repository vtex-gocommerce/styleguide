import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconBell extends PureComponent {
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
        <path class="cls-2" d="M17,10.92l-.11-.07A4,4,0,0,1,15.1,8.39l-.51-2a5.76,5.76,0,0,0-4.25-4.2,1.46,1.46,0,0,0,.16-.66,1.5,1.5,0,0,0-3,0,1.46,1.46,0,0,0,.16.66,5.76,5.76,0,0,0-4.25,4.2l-.51,2a4,4,0,0,1-1.82,2.46L1,10.92a2,2,0,0,0-1,1.71V13a2,2,0,0,0,2,2H6a3,3,0,0,0,3,3H9a3,3,0,0,0,3-3h4a2,2,0,0,0,2-2v-.37A2,2,0,0,0,17,10.92ZM10.5,15a1.5,1.5,0,0,1-3,0Zm6-2a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5v-.37a.51.51,0,0,1,.24-.43l.11-.06A5.5,5.5,0,0,0,4.36,8.76l.51-2A4.24,4.24,0,0,1,9,3.5H9a4.24,4.24,0,0,1,4.12,3.22l.51,2a5.5,5.5,0,0,0,2.51,3.38l.11.06a.51.51,0,0,1,.24.43Z" fill={svgColor} />
      </svg>
    )
  }
}

IconBell.propTypes = {
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

IconBell.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconBell
