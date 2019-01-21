import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTrashAlt extends PureComponent {
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
        <path  d="M18,3.5H12.9L12,1.26A2,2,0,0,0,10.15,0H7.85A2,2,0,0,0,6,1.26L5.1,3.5H0V5H2.16L3.31,16.21A2,2,0,0,0,5.3,18h7.4a2,2,0,0,0,2-1.79L15.84,5H18ZM7.39,1.81a.5.5,0,0,1,.46-.31h2.3a.5.5,0,0,1,.46.31l.67,1.69H6.72Zm5.8,14.24a.49.49,0,0,1-.49.45H5.3a.49.49,0,0,1-.49-.45L3.66,5H14.34ZM7.4,7.45,7.9,14a.65.65,0,0,1-.6.7h0a.65.65,0,0,1-.65-.6l-.5-6.5a.65.65,0,0,1,.6-.7A.66.66,0,0,1,7.4,7.45Zm4.5.1-.5,6.5a.65.65,0,0,1-.65.6H10.7a.65.65,0,0,1-.6-.7l.5-6.5a.67.67,0,0,1,.7-.6A.65.65,0,0,1,11.9,7.55Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTrashAlt.propTypes = {
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

IconTrashAlt.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTrashAlt
