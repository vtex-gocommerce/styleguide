import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconComments extends PureComponent {
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
        <path class="cls-2" d="M16,0H2A2,2,0,0,0,0,2v9.55a2,2,0,0,0,2,2H3.5a1,1,0,0,1,1,1v1.91a1.5,1.5,0,0,0,2.56,1.07l3.69-3.69a1,1,0,0,1,.71-.29H16a2,2,0,0,0,2-2V2A2,2,0,0,0,16,0Zm.5,11.56a.5.5,0,0,1-.5.51H11.46a2.47,2.47,0,0,0-1.76.73L6,16.49V14.58a2.51,2.51,0,0,0-2.5-2.51H2a.5.5,0,0,1-.5-.51V2a.5.5,0,0,1,.5-.5H16a.5.5,0,0,1,.5.5ZM6,6.75A1.25,1.25,0,1,1,4.75,5.5,1.25,1.25,0,0,1,6,6.75Zm4.25,0A1.25,1.25,0,1,1,9,5.5,1.25,1.25,0,0,1,10.25,6.75Zm4.25,0A1.25,1.25,0,1,1,13.25,5.5,1.25,1.25,0,0,1,14.5,6.75Z" fill={svgColor} />
      </svg>
    )
  }
}

IconComments.propTypes = {
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

IconComments.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconComments
