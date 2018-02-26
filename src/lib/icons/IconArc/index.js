import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faSpinnerThird'

class IconArc extends Component {
  render() {
    const { className, fixedWidth, spin, pulse } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} spin={spin} pulse={pulse} />
  }
}

IconArc.propTypes = {
  /** Spin icon. */
  spin: PropTypes.bool,
  /** Pulse icon. */
  pulse: PropTypes.bool,
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconArc.defaultProps = {
  spin: false,
  pulse: false,
  fixedWidth: false,
  className: '',
}

export default IconArc
