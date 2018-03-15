import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconSuccess from '../../../icons/IconSuccess'
import IconWarning from '../../../icons/IconWarning'
import IconDanger from '../../../icons/IconDanger'
import IconInfo from '../../../icons/IconInfo'
import IconClose from '../../../icons/IconCloseAlt'
import styles from './style.css'

const types = {
  success: {
    icon: IconSuccess,
    classes: 'b--green bg-green-light green',
  },
  warning: {
    icon: IconWarning,
    classes: 'b--yellow bg-yellow-light yellow',
  },
  error: {
    icon: IconDanger,
    classes: 'b--red bg-red-light red',
  },
  info: {
    icon: IconInfo,
    classes: 'b--blue bg-blue-20 blue',
  },
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
    const { type, onClose } = this.props
    const classes = `relative pa3 ba br2 ${types[type].classes}`
    const Icon = types[type].icon

    return (
      <div className={classes}>
        <div className="flex justify-center items-center mr3">
          <Icon />
          <div className="ph3">{this.props.children}</div>
        </div>
        {onClose && (
          <div className={`${styles.close} absolute pointer`} onClick={onClose}>
            <IconClose />
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
  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  type: 'info',
  onClose: null,
  autoClose: null,
}

export default Alert
