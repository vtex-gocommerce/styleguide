import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconWarning extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d="M17.71,13.76l-7-11.65a2,2,0,0,0-3.42,0l-7,11.65a2.05,2.05,0,0,0,1.76,3.1H16A2.05,2.05,0,0,0,17.71,13.76Zm-1.28,1.32a.52.52,0,0,1-.48.28H2.05a.52.52,0,0,1-.48-.28.54.54,0,0,1,0-.54l7-11.66a.49.49,0,0,1,.84,0l7,11.66A.54.54,0,0,1,16.43,15.08Z"
          fill={svgColor}
        />
        <path
          d="M8.7,11h.6a.5.5,0,0,0,.5-.44l.33-2.95a1,1,0,0,0-1-1.11H8.87a1,1,0,0,0-1,1.11l.33,3A.5.5,0,0,0,8.7,11Z"
          fill={svgColor} />

      </svg>
    )
  }
}

IconWarning.propTypes = {
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

IconWarning.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconWarning
