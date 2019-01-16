import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconStickyNote extends PureComponent {
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
        <path class="cls-2" d="M15.5,0H2.5A2.5,2.5,0,0,0,0,2.5v13A2.5,2.5,0,0,0,2.5,18h9.84a4,4,0,0,0,2.83-1.17l1.66-1.66A4,4,0,0,0,18,12.34V2.5A2.5,2.5,0,0,0,15.5,0ZM1.5,15.5V2.5a1,1,0,0,1,1-1h13a1,1,0,0,1,1,1v8.85H13A1.68,1.68,0,0,0,11.35,13V16.5H2.5A1,1,0,0,1,1.5,15.5Zm12.61.27a2.48,2.48,0,0,1-1.46.7V13a.38.38,0,0,1,.38-.38h3.44a2.48,2.48,0,0,1-.7,1.46Z" fill={svgColor} />
      </svg>
    )
  }
}

IconStickyNote.propTypes = {
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

IconStickyNote.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconStickyNote
