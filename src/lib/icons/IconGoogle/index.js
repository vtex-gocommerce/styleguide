import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-free-brands/faGoogle'

class IconGoogle extends Component {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconGoogle.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconGoogle.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconGoogle
