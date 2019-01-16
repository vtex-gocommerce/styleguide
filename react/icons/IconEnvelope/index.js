import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconEnvelope extends PureComponent {
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
        <path class="cls-2" d="M16,2H2A2,2,0,0,0,0,4V14a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM2,3.5H16a.5.5,0,0,1,.5.5v.13L9.88,9.5a1.39,1.39,0,0,1-1.76,0L1.5,4.13V4A.5.5,0,0,1,2,3.5Zm14,11H2a.5.5,0,0,1-.5-.5V5.67l5.86,4.77a2.61,2.61,0,0,0,3.28,0L16.5,5.67V14A.5.5,0,0,1,16,14.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconEnvelope.propTypes = {
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

IconEnvelope.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconEnvelope
