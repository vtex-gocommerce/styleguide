import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconEdit extends PureComponent {
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
        <path  d="M17.71,3.86,14.14.29a1,1,0,0,0-.7-.29,1,1,0,0,0-.71.29L.29,12.73a1,1,0,0,0-.29.71V17a1,1,0,0,0,1,1H4.56a1,1,0,0,0,.71-.29L17.71,5.27A1,1,0,0,0,17.71,3.86ZM4.35,16.5H1.5V13.65l9-9L13.4,7.46ZM14.46,6.4,11.6,3.54l1.84-1.83,2.85,2.85Z" fill={svgColor} />
      </svg>
    )
  }
}

IconEdit.propTypes = {
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

IconEdit.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconEdit
