import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconUser extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M14,13a2.47,2.47,0,0,1,1.84.8,2.51,2.51,0,0,1,.65,1.89c0,.47-.12.81-.52.81H2c-.3,0-.52-.23-.52-.81a2.71,2.71,0,0,1,.65-1.89A2.47,2.47,0,0,1,4,13H14m0-1.5H4a4,4,0,0,0-4,4.31C0,17.58.78,18,2,18H16c1.45,0,2-.85,2-2.19a4,4,0,0,0-4-4.31Zm-3.3-10a1,1,0,0,1,.74.33,1,1,0,0,1,.25.78l-.44,4a1,1,0,0,1-1,.89H7.74a1,1,0,0,1-1-.89l-.44-4a1,1,0,0,1,.25-.78,1,1,0,0,1,.74-.33h3.42m0-1.5H7.29A2.5,2.5,0,0,0,4.81,2.78l.44,4A2.5,2.5,0,0,0,7.74,9h2.52a2.5,2.5,0,0,0,2.49-2.22l.44-4A2.5,2.5,0,0,0,10.71,0Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconUser.propTypes = {
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

IconUser.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconUser
