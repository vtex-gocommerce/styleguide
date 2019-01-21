import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconImage extends PureComponent {
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
        <path  d="M16,2H2A2,2,0,0,0,0,4V14a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM2,3.5H16a.5.5,0,0,1,.5.5V9.26a.76.76,0,0,0-.36.08l-2.83,1.58a2.28,2.28,0,0,1-2.42-.15L8.71,9.18a3.75,3.75,0,0,0-4.42,0l-2.79,2V4A.5.5,0,0,1,2,3.5Zm14,11H2a.5.5,0,0,1-.5-.5v-.94l3.68-2.67a2.25,2.25,0,0,1,2.64,0L10,12a3.77,3.77,0,0,0,4,.25l2.46-1.37V14A.5.5,0,0,1,16,14.5ZM10.5,7A1.5,1.5,0,1,1,12,8.5,1.5,1.5,0,0,1,10.5,7Z" fill={svgColor} />
      </svg>
    )
  }
}

IconImage.propTypes = {
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

IconImage.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconImage
