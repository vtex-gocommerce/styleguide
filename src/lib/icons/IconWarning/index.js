import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-solid/faExclamationTriangle'

class IconWarning extends Component {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconWarning.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconWarning.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconWarning
