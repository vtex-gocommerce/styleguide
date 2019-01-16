import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTag extends PureComponent {
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
        <path class="cls-2" d="M15,1.51A1.52,1.52,0,0,1,16.49,3V6.83A5.54,5.54,0,0,1,14.65,11L8.91,16.1a1.52,1.52,0,0,1-1,.39,1.5,1.5,0,0,1-1.07-.44L2,11.17A1.52,1.52,0,0,1,1.9,9.09L7.05,3.35a5.54,5.54,0,0,1,4.12-1.84H15M15,0H11.17A7.06,7.06,0,0,0,5.92,2.34L.77,8.09a3,3,0,0,0,.12,4.15l4.87,4.87a3,3,0,0,0,4.15.12l5.75-5.15A7.06,7.06,0,0,0,18,6.83V3a3,3,0,0,0-3-3ZM12.25,4.1A1.65,1.65,0,1,1,10.6,5.75,1.65,1.65,0,0,1,12.25,4.1m0-1.1A2.75,2.75,0,1,0,15,5.75,2.75,2.75,0,0,0,12.25,3Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTag.propTypes = {
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

IconTag.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTag
