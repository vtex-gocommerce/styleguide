import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconArrows extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M5.5,6.75h7a.74.74,0,0,0,.69-.46A.75.75,0,0,0,13,5.47L9.53,2A.75.75,0,0,0,8.47,2L5,5.47a.75.75,0,0,0-.16.82A.74.74,0,0,0,5.5,6.75Z" /><path d="M12.5,11.25h-7a.74.74,0,0,0-.69.46.75.75,0,0,0,.16.82L8.47,16a.75.75,0,0,0,1.06,0l3.5-3.5a.75.75,0,0,0,.16-.82A.74.74,0,0,0,12.5,11.25Z"
            fill={svgColor} />
      </svg>
    )
  }
}

IconArrows.propTypes = {
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

IconArrows.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconArrows



