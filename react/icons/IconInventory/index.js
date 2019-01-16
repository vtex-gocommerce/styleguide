import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconInventory extends PureComponent {
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
        <path class="cls-2" d="M17.25,1a.76.76,0,0,0-.75.75V4H12.83a.67.67,0,0,0,.67-.67V.67A.67.67,0,0,0,12.83,0H10.17A.67.67,0,0,0,9.5.67V3.33a.67.67,0,0,0,.67.67H1.5V1.75A.76.76,0,0,0,.75,1,.76.76,0,0,0,0,1.75V18H1.5V14.5h15V18H18V1.75A.76.76,0,0,0,17.25,1ZM16.5,13H12.83a.67.67,0,0,0,.67-.67V9.67A.67.67,0,0,0,12.83,9H10.17a.67.67,0,0,0-.67.67v2.66a.67.67,0,0,0,.67.67H6.83a.67.67,0,0,0,.67-.67V9.67A.67.67,0,0,0,6.83,9H4.17a.67.67,0,0,0-.67.67v2.66a.67.67,0,0,0,.67.67H1.5V5.5h15Z" fill={svgColor} />
      </svg>
    )
  }
}

IconInventory.propTypes = {
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

IconInventory.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconInventory
