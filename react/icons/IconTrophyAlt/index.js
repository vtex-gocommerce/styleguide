import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTrophyAlt extends PureComponent {
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
        <path  d="M15.07,2.5H14.5V2a2,2,0,0,0-2-2h-7a2,2,0,0,0-2,2v.5H2.93A2.93,2.93,0,0,0,0,5.43H0A2.94,2.94,0,0,0,1.3,7.87L2.94,9a2.88,2.88,0,0,0,1.62.5h.13c.08.14.15.29.24.43l2.56,4.26a1.79,1.79,0,0,0,.51.55V16.5H5a.5.5,0,0,0-.5.5v1h9V17a.5.5,0,0,0-.5-.5H10V14.69a1.79,1.79,0,0,0,.51-.55l2.56-4.26c.09-.14.16-.29.24-.43h.13A2.88,2.88,0,0,0,15.06,9L16.7,7.87A2.94,2.94,0,0,0,18,5.43h0A2.93,2.93,0,0,0,15.07,2.5ZM3.78,7.72,2.14,6.62A1.43,1.43,0,0,1,2.93,4H3.5v.73A9.93,9.93,0,0,0,4,7.84Zm5.45,5.65a.27.27,0,0,1-.46,0L6.21,9.1A8.51,8.51,0,0,1,5,4.73V2a.5.5,0,0,1,.5-.5h7A.5.5,0,0,1,13,2V4.73A8.51,8.51,0,0,1,11.79,9.1Zm6.63-6.75-1.64,1.1L14,7.84a9.93,9.93,0,0,0,.5-3.11V4h.57a1.43,1.43,0,0,1,.79,2.62ZM10.94,5.27,10,6l.33,1.26a.16.16,0,0,1-.24.17L9,6.71l-1.09.76a.16.16,0,0,1-.24-.17L8,6l-.94-.77A.16.16,0,0,1,7.13,5l1.2-.17.53-1.23a.15.15,0,0,1,.28,0l.52,1.23L10.87,5A.16.16,0,0,1,10.94,5.27Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTrophyAlt.propTypes = {
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

IconTrophyAlt.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTrophyAlt
