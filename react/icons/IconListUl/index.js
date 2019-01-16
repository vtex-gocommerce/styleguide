import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconListUl extends PureComponent {
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
        <path class="cls-2" d="M6,5H16V3H6ZM5,4A1.5,1.5,0,1,1,3.5,2.5,1.5,1.5,0,0,1,5,4Zm1,6H16V8H6ZM5,9A1.5,1.5,0,1,1,3.5,7.5,1.5,1.5,0,0,1,5,9Zm1,6H16V13H6ZM5,14a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,5,14Z" fill={svgColor} />
      </svg>
    )
  }
}

IconListUl.propTypes = {
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

IconListUl.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconListUl
