import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-light/faTimes'

class IconCloseAlt extends Component {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconCloseAlt.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconCloseAlt.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconCloseAlt
