import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faCog'

class IconSettings extends PureComponent {
  render() {
    const { className, ignoreSize, spin, width, height } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}

    return <FontAwesome className={className} icon={icon} spin={spin} style={style} />
  }
}

IconSettings.propTypes = {
  /** Make icon spin. */
  spin: PropTypes.bool,
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconSettings.defaultProps = {
  spin: false,
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconSettings
