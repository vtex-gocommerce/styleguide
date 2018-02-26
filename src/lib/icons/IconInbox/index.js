import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faInboxIn'

class IconInbox extends Component {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconInbox.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconInbox.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconInbox
