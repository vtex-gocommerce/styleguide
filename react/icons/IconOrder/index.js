import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconOrder extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M16,1.5a.5.5,0,0,1,.5.5V15.93a.3.3,0,0,1-.41.28l-1.7-.68a3.38,3.38,0,0,0-1.3-.25,3.51,3.51,0,0,0-1.56.37l-1,.48a3.52,3.52,0,0,1-3.14,0l-1-.48a3.51,3.51,0,0,0-1.56-.37,3.38,3.38,0,0,0-1.3.25l-1.7.68a.3.3,0,0,1-.41-.28V2A.5.5,0,0,1,2,1.5H16M16,0H2A2,2,0,0,0,0,2V16.37a1.51,1.51,0,0,0,1.5,1.51,1.64,1.64,0,0,0,.56-.11l2.11-.85a2.11,2.11,0,0,1,.74-.14A2,2,0,0,1,5.8,17l1,.48a5,5,0,0,0,4.48,0l1-.48a2,2,0,0,1,.89-.21,2.07,2.07,0,0,1,.74.14l2.11.85a1.64,1.64,0,0,0,.56.11A1.51,1.51,0,0,0,18,16.37V2a2,2,0,0,0-2-2ZM6.75,4A.76.76,0,0,0,6,3.25H4a.75.75,0,0,0,0,1.5H6A.76.76,0,0,0,6.75,4Zm8,4A.76.76,0,0,0,14,7.25H4a.75.75,0,0,0,0,1.5H14A.76.76,0,0,0,14.75,8Zm0,4a.76.76,0,0,0-.75-.75H4a.75.75,0,0,0,0,1.5H14A.76.76,0,0,0,14.75,12Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconOrder.propTypes = {
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

IconOrder.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconOrder
