import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faSpinnerThird'

class IconArc extends PureComponent {
  render() {
    const { className, fixedWidth, spin, pulse } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} spin={spin} pulse={pulse} />
  }
}

IconArc.propTypes = {
  /** Make icon spin. */
  spin: PropTypes.bool,
  /** Make icon pulse. */
  pulse: PropTypes.bool,
  /** Used a fixed width on icon. */
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
