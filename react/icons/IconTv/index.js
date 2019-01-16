import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTv extends PureComponent {
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
        <path class="cls-2" d="M16.5,1.5H1.5A1.5,1.5,0,0,0,0,3v9a1.5,1.5,0,0,0,1.5,1.5H8.25V15H6a1.5,1.5,0,0,0-1.5,1.5h9A1.5,1.5,0,0,0,12,15H9.75V13.5H16.5A1.5,1.5,0,0,0,18,12V3A1.5,1.5,0,0,0,16.5,1.5Zm0,10.5H1.5V3h15Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTv.propTypes = {
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

IconTv.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTv
