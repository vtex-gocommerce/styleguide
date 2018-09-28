import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class BullHorm extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M15.25,6.25H15v-5A1.21,1.21,0,0,0,13.8,0a1.19,1.19,0,0,0-.67.2L7.79,3.78A10.07,10.07,0,0,1,3.88,5.33l-3,.51a1,1,0,0,0-.84,1v4.32a1,1,0,0,0,.84,1l1.82.31L1.28,17a.76.76,0,0,0,.12.67A.74.74,0,0,0,2,18H6a.76.76,0,0,0,.75-.75V13.59c.36.19.71.39,1,.61l5.33,3.59a1.13,1.13,0,0,0,.67.21A1.21,1.21,0,0,0,15,16.79v-5h.25a2.75,2.75,0,0,0,0-5.5ZM1.5,7.25l2.63-.44a10.66,10.66,0,0,0,1.12-.25v4.85a10.5,10.5,0,0,0-1.14-.26L1.5,10.72ZM5.25,16.5H3l1.14-3.8a10.42,10.42,0,0,1,1.1.28Zm8.25-.27L8.63,13a11.76,11.76,0,0,0-1.88-1V6A11.61,11.61,0,0,0,8.62,5L13.5,1.77Zm1.75-6H15V7.75h.25a1.25,1.25,0,0,1,0,2.5Z"
          fill={svgColor} />
      </svg>
    )
  }
}

BullHorm.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string,
}

BullHorm.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default BullHorm
