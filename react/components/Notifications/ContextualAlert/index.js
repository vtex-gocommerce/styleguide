import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheckCircle from '../../../icons/IconCheckCircle'
import IconExclamationTriangle from '../../../icons/IconExclamationTriangle'
import IconTimesCircle from '../../../icons/IconTimesCircle'
import IconInfoCircle from '../../../icons/IconInfoCircle'
const types = {
  success: {
    icon: IconCheckCircle,
    classes: 'b--success c-success',
    fill: 'bg-light-success'
  },
  warning: {
    icon: IconExclamationTriangle,
    classes: 'b--warning c-warning',
    fill: 'bg-light-warning'
  },
  error: {
    icon: IconTimesCircle,
    classes: 'b--danger c-danger',
    fill: 'bg-light-danger'
  },
  info: {
    icon: IconInfoCircle,
    classes: 'b--info  c-info',
    fill: 'bg-light-info'
  }
}

class ContextualAlert extends PureComponent {
  componentDidMount() {
    if (this.props.autoClose && this.props.onClose) {
      this.timeout = setTimeout(this.props.onClose, this.props.autoClose)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { type, onClose, fill } = this.props

    const classes = `pa4 ba br2 b--dashed flex ${types[type || 'error'].classes} ${fill ? types[type || 'error'].fill : ''}`

    return (
      <div className={classes}>
        <div className="flex justify-center mr3 w-100">
          <div className="dib ph3 fw6">{this.props.children}</div>
        </div>
        {onClose && (
          <div className="pointer" onClick={onClose}>
            <IconTimesCircle />
          </div>
        )}
      </div>
    )
  }
}

ContextualAlert.propTypes = {
  /** Define how the alert will look. */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /** Function that will be called when user click to close ContextualAlert. */
  onClose: PropTypes.func,
  /** Set a timeout for alert execute **onClose** function. */
  autoClose: PropTypes.number,
  /** Sets whether to have background. */
  fill: PropTypes.bool,
  children: PropTypes.node.isRequired
}

ContextualAlert.defaultProps = {
  type: 'info',
  onClose: null,
  autoClose: null,
  fill: false
}

export default ContextualAlert
