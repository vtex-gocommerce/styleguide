import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconAngleLeft extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M10.7495,14 C10.5135,14 10.2765,13.917 10.0855,13.747 L5.5855,9.747 C5.3725,9.558 5.2495,9.285 5.2495,9 C5.2495,8.714 5.3725,8.442 5.5855,8.252 L10.0855,4.252 C10.4995,3.887 11.1305,3.923 11.4975,4.335 C11.8645,4.748 11.8275,5.38 11.4145,5.747 L7.7555,9 L11.4145,12.252 C11.8275,12.619 11.8645,13.251 11.4975,13.664 C11.2995,13.887 11.0255,14 10.7495,14"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconAngleLeft.propTypes = {
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

IconAngleLeft.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconAngleLeft
