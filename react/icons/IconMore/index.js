import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconMore extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="16.5 7.75 10.25 7.75 10.25 1.5 7.75 1.5 7.75 7.75 1.5 7.75 1.5 10.25 7.75 10.25 7.75 16.5 10.25 16.5 10.25 10.25 16.5 10.25 16.5 7.75"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconMore.propTypes = {
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

IconMore.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconMore
