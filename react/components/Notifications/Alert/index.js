import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheckCircle from '../../../icons/IconCheckCircle'
import IconExclamationTriangle from '../../../icons/IconExclamationTriangle'
import IconBan from '../../../icons/IconBan'
import IconInfoCircle from '../../../icons/IconInfoCircle'
import IconTimes from '../../../icons/IconTimes'

const types = {
  success: {
    icon: IconCheckCircle,
    classes: 'b--success c-success',
    fill: ' bg-washed-green'
  },
  warning: {
    icon: IconExclamationTriangle,
    classes: 'b--warning c-warning',
    fill: 'bg-warning--faded'
  },
  error: {
    icon: IconBan,
    classes: 'b--danger c-danger',
    fill: 'bg-danger--faded'
  },
  info: {
    icon: IconInfoCircle,
    classes: 'b--info c-info',
    fill: ' bg-washed-blue'
  }
}

class Alert extends PureComponent {
  componentDidMount() {
    if (this.props.autoClose && this.props.onClose) {
      this.timeout = setTimeout(this.props.onClose, this.props.autoClose)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { type, onClose, title, action } = this.props
    const classes = `flex ph5 pv5 ba br2 b--dashed flex ${types[type].classes} ${types[type].fill}`
    const Icon = types[type].icon
    const Action = props => action

    return (
      <div className={classes}>
        <div className="flex items-center mr3 w-100">
          <Icon family="regular" width="42px" height="42px" />
          <div className="ml4">
            {title && <p className="gray f6 ma0 mb1">{title}</p>}
            <div className="fw6 f5">{this.props.children}</div>
          </div>
        </div>
        {action && <Action />}
        {onClose && (
          <div className={`pointer`} onClick={onClose}>
            <IconTimes />
          </div>
        )}
      </div>
    )
  }
}

Alert.propTypes = {
  /** Define how the alert will look. */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /** Function that will be called when user click to close Alert. */
  onClose: PropTypes.func,
  /** Set a timeout for alert execute **onClose** function. */
  autoClose: PropTypes.number,
  /** title of alert. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Sets whether to have background. */
  fill: PropTypes.bool,
  /** Set action on alert */
  action: PropTypes.element,
  children: PropTypes.node.isRequired
}

Alert.defaultProps = {
  type: 'info',
  onClose: null,
  autoClose: null,
  title: null
}

export default Alert
