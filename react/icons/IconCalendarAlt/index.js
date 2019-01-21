import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconCalendarAlt extends PureComponent {
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
        <path  d="M15.5,1.5H13.75V0h-1.5V1.5H5.75V0H4.25V1.5H2.5A2.5,2.5,0,0,0,0,4V15.5A2.5,2.5,0,0,0,2.5,18h13A2.5,2.5,0,0,0,18,15.5V4A2.5,2.5,0,0,0,15.5,1.5ZM2.5,3H4.25V5h1.5V3h6.5V5h1.5V3H15.5a1,1,0,0,1,1,1V6H1.5V4A1,1,0,0,1,2.5,3Zm13,13.5H2.5a1,1,0,0,1-1-1v-8h15v8A1,1,0,0,1,15.5,16.5ZM5.5,9.75v1a.5.5,0,0,1-.5.5H4a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H5A.5.5,0,0,1,5.5,9.75Zm4.5,0v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,10,9.75Zm4.5,0v1a.5.5,0,0,1-.5.5H13a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,14.5,9.75Zm-9,3.5v1a.5.5,0,0,1-.5.5H4a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H5A.5.5,0,0,1,5.5,13.25Zm4.5,0v1a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,10,13.25Zm4.5,0v1a.5.5,0,0,1-.5.5H13a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1A.5.5,0,0,1,14.5,13.25Z" fill={svgColor} />
      </svg>
    )
  }
}

IconCalendarAlt.propTypes = {
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

IconCalendarAlt.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconCalendarAlt
