import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-solid/faInfoCircle'

class IconInfo extends Component {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconInfo.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconInfo.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconInfo
