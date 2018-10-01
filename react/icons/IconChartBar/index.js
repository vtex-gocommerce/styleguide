import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconChartBar extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M7.5,4h-6V2h6Zm9,2H1.5V8h15Zm-7,4h-8v2h8Zm4,4H1.5v2h12Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconChartBar.propTypes = {
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

IconChartBar.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconChartBar






