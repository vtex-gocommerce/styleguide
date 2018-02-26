import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faCog'

class IconSettings extends Component {
  render() {
    const { className, fixedWidth, spin } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} spin={spin} />
  }
}

IconSettings.propTypes = {
  /** Spin icon. */
  spin: PropTypes.bool,
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconSettings.defaultProps = {
  spin: false,
  fixedWidth: false,
  className: '',
}

export default IconSettings
