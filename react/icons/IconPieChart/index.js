import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPieChart extends PureComponent {
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
        <path class="cls-2" d="M7.35,1.08A8.53,8.53,0,0,0,0,9.5H0a8.48,8.48,0,0,0,7,8.37,8.54,8.54,0,0,0,9.92-7.22.71.71,0,0,0,0-.14,1,1,0,0,0-1-1H9A.5.5,0,0,1,8.5,9V2.07A1,1,0,0,0,7.35,1.08ZM7.1,9A1.9,1.9,0,0,0,9,10.9h6.46a7.22,7.22,0,0,1-2.8,4.34A7.09,7.09,0,0,1,1.51,10.75,7.45,7.45,0,0,1,1.4,9.5h0a7.14,7.14,0,0,1,5.7-7Zm3-8V6.93a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1,.76.76,0,0,0,0-.15A8,8,0,0,0,11.24,0,1,1,0,0,0,10.07,1Zm4.67,2.26a6.67,6.67,0,0,1,1.78,3.27h-5V1.48A6.67,6.67,0,0,1,14.74,3.26Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPieChart.propTypes = {
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

IconPieChart.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPieChart
