import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconHome extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M17.12,6.18,10.75.65a2.68,2.68,0,0,0-3.5,0L.88,6.18A2.57,2.57,0,0,0,0,8.46l1.09,7.78a2.05,2.05,0,0,0,2,1.76H14.87a2.05,2.05,0,0,0,2-1.76L18,8.46A2.57,2.57,0,0,0,17.12,6.18ZM10.75,16.47H7.25v-6a1.75,1.75,0,0,1,3.5,0Zm5.71-8.22L15.37,16a.51.51,0,0,1-.5.44H12.25v-6a3.25,3.25,0,0,0-6.5,0v6H3.13a.51.51,0,0,1-.5-.44L1.54,8.25a1,1,0,0,1,.34-.91L8.25,1.81a1.14,1.14,0,0,1,1.5,0l6.37,5.53A1,1,0,0,1,16.46,8.25Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconHome.propTypes = {
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

IconHome.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconHome
