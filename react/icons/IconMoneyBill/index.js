import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconMoneyBill extends PureComponent {
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
        <path  d="M11.5,9c0,2-1,3-2.5,3S6.5,11,6.5,9,7.5,6,9,6,11.5,7,11.5,9ZM18,4V14a1.5,1.5,0,0,1-1.5,1.5H1.5A1.5,1.5,0,0,1,0,14V4A1.5,1.5,0,0,1,1.5,2.5h15A1.5,1.5,0,0,1,18,4ZM3.24,14.2H14.76a2,2,0,0,1,1.94-1.94V5.74A2,2,0,0,1,14.76,3.8H3.24A2,2,0,0,1,1.3,5.74v6.52A2,2,0,0,1,3.24,14.2Z" fill={svgColor} />
      </svg>
    )
  }
}

IconMoneyBill.propTypes = {
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

IconMoneyBill.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconMoneyBill
