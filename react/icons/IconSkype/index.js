import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconSkype extends PureComponent {
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
        <path class="cls-2" d="M15.84,10.21A7,7,0,0,0,9,2a7,7,0,0,0-1.21.1,4,4,0,0,0-2-.54A4.16,4.16,0,0,0,2.16,7.79,7,7,0,0,0,9,16a7,7,0,0,0,1.21-.1,4,4,0,0,0,2,.54,4.14,4.14,0,0,0,4.13-4.15A4.22,4.22,0,0,0,15.84,10.21ZM9,13.47c-2.47,0-3.6-1.26-3.6-2.18a.8.8,0,0,1,.85-.8c1,0,.78,1.58,2.75,1.58,1,0,1.6-.6,1.6-1.17,0-.34-.2-.73-.86-.89l-2.2-.56C5.81,9,5.5,8,5.5,7.11c0-1.89,1.73-2.58,3.37-2.58s3.33.84,3.33,2a.79.79,0,0,1-.89.75c-.9,0-.75-1.27-2.56-1.27-.9,0-1.38.42-1.38,1s.7.8,1.32.94l1.62.36c1.78.41,2.26,1.45,2.26,2.44C12.57,12.28,11.38,13.47,9,13.47Z" fill={svgColor} />
      </svg>
    )
  }
}

IconSkype.propTypes = {
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

IconSkype.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconSkype
