import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

class IconCardFront extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M15.5,3.5a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H2.5a1,1,0,0,1-1-1v-9a1,1,0,0,1,1-1h13m0-1.5H2.5A2.5,2.5,0,0,0,0,4.5v9A2.5,2.5,0,0,0,2.5,16h13A2.5,2.5,0,0,0,18,13.5v-9A2.5,2.5,0,0,0,15.5,2ZM15,6a1,1,0,0,0-1-1H10.5a1,1,0,0,0,0,2H14A1,1,0,0,0,15,6ZM5.12,12.5a.62.62,0,0,0-.62-.63h-1a.63.63,0,1,0,0,1.25h1A.62.62,0,0,0,5.12,12.5Zm10,0a.62.62,0,0,0-.62-.63h-1a.63.63,0,1,0,0,1.25h1A.62.62,0,0,0,15.12,12.5Zm-3.33,0a.63.63,0,0,0-.62-.63h-1a.63.63,0,1,0,0,1.25h1A.62.62,0,0,0,11.79,12.5Zm-3.33,0a.63.63,0,0,0-.63-.63h-1a.63.63,0,0,0,0,1.25h1A.63.63,0,0,0,8.46,12.5Z"
          fill={svgColor}
        />
      </svg>
    )
  }
}

IconCardFront.propTypes = {
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

IconCardFront.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconCardFront
