import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCloseAlt from '../../../icons/IconCloseAlt'

import { ToastContainer, toast } from 'react-toastify'
import './ReactToastify.global.css'

const types = {
  info: {
    className: 'bg-primary-light b--primary b--dashed',
    bodyClassName: 'c-primary'
  },
  success: {
    className: 'bg-success-light b--success b--dashed',
    bodyClassName: 'c-success'
  },
  danger: {
    className: 'bg-danger-light b--danger ',
    bodyClassName: 'c-danger'
  },
  warning: {
    className: 'bg-warning-light b--warning b--dashed',
    bodyClassName: 'c-warning'
  }
}

class Notify extends PureComponent {
  state = {
    componentDidMount: false
  }

  componentDidMount() {
    this.setState({ componentDidMount: true })
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const { type, position, autoClose, text, onClose, show } = this.props

    if (this.state.componentDidMount && show) {
      toast(text, {
        onClose: this.onClose,
        className: 'ba br2 b--dashed ' + types[type].className,
        bodyClassName: 'fw6 g-f2 lh-copy ' + types[type].bodyClassName
      })
    }

    return (
      <ToastContainer
        position={position}
        autoClose={autoClose}
        closeButton={<IconCloseAlt width="12px" heigth="12px" className="c-base-inverted-1" />}
        draggable
        pauseOnHover
      />
    )
  }
}

Notify.propTypes = {
  /** Define how the alert will look. */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /** Define position. */
  position: PropTypes.oneOf(['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center']),
  /** Autoclose */
  autoClose: PropTypes.bool,
  /** Function that will be called when user click to close Alert. */
  onClose: PropTypes.func,
  /** text of alert. */
  text: PropTypes.string,
  /** Show alert. */
  show: PropTypes.bool
}

Notify.defaultProps = {
  type: 'info',
  position: 'top-right',
  onClose: null,
  autoClose: 5000,
  text: '',
  show: true
}

export default Notify
