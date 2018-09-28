import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconCart extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M16,0H2A2,2,0,0,0,0,2v9a2,2,0,0,0,2,2H7l-1,3.5H2.5V18h13V16.5H12.06L11,13h5a2,2,0,0,0,2-2V2A2,2,0,0,0,16,0ZM10.49,16.5h-3L8.56,13h.88Zm6-5.5a.5.5,0,0,1-.5.5H2a.5.5,0,0,1-.5-.5V2A.5.5,0,0,1,2,1.5H16a.5.5,0,0,1,.5.5Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconCart.propTypes = {
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

IconCart.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconCart







