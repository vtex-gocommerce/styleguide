import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconTimes from '../../../icons/IconTimes'

import { ToastContainer, toast } from 'react-toastify'
import './ReactToastify.global.css'

const types = {
  info: {
    className: 'bg-primary-light b--primary',
    bodyClassName: 'c-base-inverted-1',
    progressClassName: 'bg-primary'
  },
  success: {
    className: 'bg-success-light b--success',
    bodyClassName: 'c-base-inverted-1',
    progressClassName: 'bg-success'
  },
  danger: {
    className: 'bg-danger-light b--danger ',
    bodyClassName: 'c-base-inverted-1',
    progressClassName: 'bg-danger'
  },
  warning: {
    className: 'bg-warning-light b--warning',
    bodyClassName: 'c-base-inverted-1',
    progressClassName: 'bg-warning'
  }
}

const show = (text, options = {}) => {
  let type = options.type || 'success'
  const autoClose = !(typeof options.autoClose === 'boolean') ? options.autoClose : options.autoClose === true && 5000

  toast(text, {
    toastId: options.toastId || null,
    className: 'ba br2 ' + types[type].className,
    bodyClassName: "f6 lh-copy " + types[type].bodyClassName,
    progressClassName: types[type].progressClassName,
    position: options.position || 'top-right',
    autoClose: autoClose,
    draggable: options.draggable && options.draggable === false ? false : true,
    pauseOnHover: options.pauseOnHover && options.pauseOnHover === false ? false : true,
    onClose: options.onClose || null
  })
}

class Notify extends PureComponent {
  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    return <ToastContainer closeButton={<IconTimes width="12px" heigth="12px" className="c-base-inverted-1" />} />
  }
}

Notify.propTypes = {}

Notify.defaultProps = {}

export default { Notify, show }
