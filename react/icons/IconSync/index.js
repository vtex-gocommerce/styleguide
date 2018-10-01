import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconSync extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M16.48,9.5H18A8.39,8.39,0,0,1,9.41,18a9.47,9.47,0,0,1-7.3-3.31L.87,16.05a.51.51,0,0,1-.37.17.5.5,0,0,1-.5-.51V11.5A.5.5,0,0,1,.5,11H4.36a.5.5,0,0,1,.37.84L3.15,13.56a8,8,0,0,0,6.26,2.88A6.82,6.82,0,0,0,16.48,9.5ZM17.13,2,15.89,3.31A9.47,9.47,0,0,0,8.59,0,8.39,8.39,0,0,0,0,8.5H1.52A6.82,6.82,0,0,1,8.59,1.56a8,8,0,0,1,6.26,2.88L13.27,6.16a.5.5,0,0,0,.37.84H17.5a.5.5,0,0,0,.5-.5V2.29A.5.5,0,0,0,17.13,2Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconSync.propTypes = {
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

IconSync.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconSync









