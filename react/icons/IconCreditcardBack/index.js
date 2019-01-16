import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconCreditcardBack extends PureComponent {
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
        <path class="cls-2" d="M3.5,11H6.88v1.5H3.5ZM18,4.5v9A2.5,2.5,0,0,1,15.5,16H2.5A2.5,2.5,0,0,1,0,13.5v-9A2.5,2.5,0,0,1,2.5,2h13A2.5,2.5,0,0,1,18,4.5ZM1.5,4.5V6h15V4.5a1,1,0,0,0-1-1H2.5A1,1,0,0,0,1.5,4.5Zm15,9v-6H1.5v6a1,1,0,0,0,1,1h13A1,1,0,0,0,16.5,13.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconCreditcardBack.propTypes = {
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

IconCreditcardBack.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconCreditcardBack
