import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const types = {
  success: 'bg-green',
  warning: 'bg-yellow',
  danger: 'bg-red',
}

class Status extends PureComponent {
  render() {
    return <div className={`${types[this.props.type]} dib pa1 br-100`} />
  }
}

Status.propTypes = {
  /** Give a color meaning to our status. */
  type: PropTypes.oneOf(['success', 'warning', 'danger']),
}

Status.defaultProps = {
  type: 'success',
}

export default Status