import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconCopy extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          fill={svgColor}
          d="M15.91,2.66,13.84.59A2,2,0,0,0,12.42,0H7.5a2,2,0,0,0-2,2V12a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V4.08A2,2,0,0,0,15.91,2.66ZM14.85,3.72a.51.51,0,0,1,.15.36V4.4H13.5a.9.9,0,0,1-.9-.9v-2a.42.42,0,0,1,.18.11ZM14.5,12.5h-7A.5.5,0,0,1,7,12V2a.5.5,0,0,1,.5-.5h3.9v2a2.1,2.1,0,0,0,2.1,2.1H15V12A.5.5,0,0,1,14.5,12.5Zm-3.5,3h1.5V16a2,2,0,0,1-2,2h-7a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2H4V5.5H3.5A.5.5,0,0,0,3,6V16a.5.5,0,0,0,.5.5h7A.5.5,0,0,0,11,16Z"
        />
      </svg>
    )
  }
}

IconCopy.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string
}

IconCopy.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconCopy
