import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconBox extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M17.44,6.29,15.31,1.73A3,3,0,0,0,12.59,0H5.41A3,3,0,0,0,2.69,1.73L.56,6.29A6,6,0,0,0,0,8.83V15a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V8.83A6,6,0,0,0,17.44,6.29ZM14,2.37l2.13,4.56a5.44,5.44,0,0,1,.19.57H9.75v-6h2.84A1.51,1.51,0,0,1,14,2.37Zm-9.9,0A1.51,1.51,0,0,1,5.41,1.5H8.25v6H1.73a5.44,5.44,0,0,1,.19-.57ZM15,16.5H3A1.5,1.5,0,0,1,1.5,15V9h15v6A1.5,1.5,0,0,1,15,16.5Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconBox.propTypes = {
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

IconBox.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconBox






