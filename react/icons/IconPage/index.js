import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'
import styles from '../rotateAnimation.style.css'

class IconPage extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, animate } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg
        className={`${className} ${animate ? styles.iconAnimate : ''}`}
        { ...style }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M2.25 0H15.75C16.95 0 18 1.05 18 2.25V7.5V15.75C18 16.95 16.95 18 15.75 18H2.25C1.05 18 0 16.95 0 15.75V7.5V2.25C0 1.05 1.05 0 2.25 0ZM2.25 1.5C1.8 1.5 1.5 1.8 1.5 2.25V6H16.5V2.25C16.5 1.8 16.2 1.5 15.75 1.5H2.25ZM15.75 16.5C16.2 16.5 16.5 16.2 16.5 15.75V7.5H1.5V15.75C1.5 16.2 1.8 16.5 2.25 16.5H15.75ZM4.5 3.75C4.5 4.16421 4.16421 4.5 3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3C4.16421 3 4.5 3.33579 4.5 3.75ZM6 4.5C6.41421 4.5 6.75 4.16421 6.75 3.75C6.75 3.33579 6.41421 3 6 3C5.58579 3 5.25 3.33579 5.25 3.75C5.25 4.16421 5.58579 4.5 6 4.5ZM9 3.75C9 4.16421 8.66421 4.5 8.25 4.5C7.83579 4.5 7.5 4.16421 7.5 3.75C7.5 3.33579 7.83579 3 8.25 3C8.66421 3 9 3.33579 9 3.75ZM14.25 11.25C14.7 11.25 15 10.95 15 10.5C15 10.05 14.7 9.75 14.25 9.75H3.75C3.3 9.75 3 10.05 3 10.5C3 10.95 3.3 11.25 3.75 11.25H14.25ZM12 13.5C12 13.95 11.7 14.25 11.25 14.25H3.75C3.3 14.25 3 13.95 3 13.5C3 13.05 3.3 12.75 3.75 12.75H11.25C11.7 12.75 12 13.05 12 13.5Z" fill={svgColor} />
      </svg>
    )
  }
}

IconPage.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string,
  animate: PropTypes.bool
}

IconPage.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: '',
  animate: false
}

export default IconPage
