import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import open from '@fortawesome/fontawesome-pro-regular/faEye'
import closed from '@fortawesome/fontawesome-pro-regular/faEyeSlash'

class IconVisibility extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, isVisible } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = isVisible ? open : closed

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconVisibility.propTypes = {
  /** Set icon to open or closed. */
  isVisible: PropTypes.bool,
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconVisibility.defaultProps = {
  isVisible: false,
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconVisibility
