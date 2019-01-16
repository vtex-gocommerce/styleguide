import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconTable extends PureComponent {
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
        <path class="cls-2" d="M16,1H2A2,2,0,0,0,0,3V15a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V3A2,2,0,0,0,16,1Zm0,1.5a.5.5,0,0,1,.5.5V8.25H9.75V2.5ZM2,2.5H8.25V8.25H1.5V3A.5.5,0,0,1,2,2.5Zm0,13a.5.5,0,0,1-.5-.5V9.75H8.25V15.5Zm14,0H9.75V9.75H16.5V15A.5.5,0,0,1,16,15.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconTable.propTypes = {
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

IconTable.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconTable
