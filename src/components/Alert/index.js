import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import faCheckCircle from '@fortawesome/fontawesome-pro-solid/faCheckCircle'
import faExclamationTriangle from '@fortawesome/fontawesome-pro-solid/faExclamationTriangle'
import faInfoCircle from '@fortawesome/fontawesome-pro-solid/faInfoCircle'
import faTimesCircle from '@fortawesome/fontawesome-pro-solid/faTimesCircle'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'

class Alert extends Component {
  componentDidMount() {
    if (this.props.autoClose && this.props.onClose) {
      this.timeout = setTimeout(this.props.onClose, this.props.autoClose)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { type, onClose } = this.props
    let classes = 'pa3 ba br2 tc '
    const closeClass = ''
    let showIcon = false
    let Icon

    switch (type) {
      case 'success': {
        showIcon = true
        classes += 'b--green bg-green-light green '
        Icon = faCheckCircle
        break
      }
      case 'error': {
        showIcon = true
        classes += 'b--red bg-red-light red '
        Icon = faTimesCircle
        break
      }
      case 'warning': {
        showIcon = true
        classes += 'b--yellow bg-yellow-light yellow '
        Icon = faExclamationTriangle
        break
      }
      default: {
        showIcon = true
        classes += 'b--blue bg-blue-20 blue '
        Icon = faInfoCircle
        break
      }
    }

    return (
      <div className={`flex items-center ${classes}`}>
        <div className="w-100">
          {showIcon && <FontAwesome icon={Icon} />}

          <span className={showIcon ? 'ph3' : ''}>{this.props.children}</span>
        </div>

        {onClose && (
          <div className={`pointer ${closeClass}`} onClick={onClose}>
            <FontAwesome icon={faTimes} />
          </div>
        )}
      </div>
    )
  }
}

Alert.propTypes = {
  /** Define how the alert will look. */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'info-dark']),
  /** Function that will be called when user click to close Alert. */
  onClose: PropTypes.func,
  /** Set a timeout for alert execute **onClose** function. */
  autoClose: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  type: 'info',
}

export default Alert
