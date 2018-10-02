import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconSuccess from '../../../icons/IconSuccess'
import IconWarning from '../../../icons/IconWarning'
import IconDanger from '../../../icons/IconClose'
import IconInfo from '../../../icons/IconInfo'
import IconClose from '../../../icons/IconCloseAlt'
const types = {
  success: {
    icon: IconSuccess,
    classes: 'b--success c-success',
    fill: 'bg-light-success'
  },
  warning: {
    icon: IconWarning,
    classes: 'b--warning c-warning',
    fill: 'bg-light-warning'
  },
  error: {
    icon: IconDanger,
    classes: 'b--danger c-danger',
    fill: 'bg-light-danger'
  },
  info: {
    icon: IconInfo,
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

    const classes = `g-pa4 ba br2 b--dashed flex ${types[(type || 'error')].classes} ${fill ? types[(type || 'error')].fill : ''}`

    return (
      <div className={classes}>
        <div className="flex justify-center g-mr3 w-100">
          <div className="dib ph3 fw6">{this.props.children}</div>
        </div>
        {onClose && (
          <div className="pointer" onClick={onClose}>
            <IconClose />
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
