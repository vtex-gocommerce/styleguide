import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faCog'

class IconSettings extends PureComponent {
  render() {
    const { className, fixedWidth, spin } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} spin={spin} />
  }
}

IconSettings.propTypes = {
  /** Make icon spin. */
  spin: PropTypes.bool,
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconSettings.defaultProps = {
  spin: false,
  fixedWidth: false,
  className: '',
}

export default IconSettings
