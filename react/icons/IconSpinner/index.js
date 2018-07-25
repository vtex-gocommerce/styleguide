import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faSpinner'

class IconSpinner extends PureComponent {
  render() {
    const { className, ignoreSize, spin, pulse, width, height } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}

    return <FontAwesome className={className} icon={icon} spin={spin} pulse={pulse} style={style} />
  }
}

IconSpinner.propTypes = {
  /** Makes icon spin. */
  spin: PropTypes.bool,
  /** Makes icon pulse. */
  pulse: PropTypes.bool,
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconSpinner.defaultProps = {
  spin: false,
  pulse: false,
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconSpinner
