import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCloseAlt from '../../../icons/IconCloseAlt'

import { ToastContainer, toast } from 'react-toastify'
import './ReactToastify.global.css'

const types = {
  info: {
    className: 'bg-primary-light b--primary b--dashed',
    bodyClassName: 'c-primary',
    progressClassName: 'bg-primary'
  },
  success: {
    className: 'bg-success-light b--success b--dashed',
    bodyClassName: 'c-success',
    progressClassName: 'bg-success'
  },
  danger: {
    className: 'bg-danger-light b--danger ',
    bodyClassName: 'c-danger',
    progressClassName: 'bg-danger'
  },
  warning: {
    className: 'bg-warning-light b--warning b--dashed',
    bodyClassName: 'c-warning',
    progressClassName: 'bg-warning'
  }
}

const show = (text, options) => {
  let autoClose
  let type = options.type || 'info'
  if (options.autoClose !== 'undefined' && options.autoClose === false) {
    autoClose = false
  } else if (options.autoClose && options.autoClose !== false) {
    autoClose = options.autoClose
  } else {
    autoClose = 5000
  }

  toast(text, {
    className: 'ba br2 b--dashed ' + types[type].className,
    bodyClassName: 'fw6 g-f2 lh-copy ' + types[type].bodyClassName,
    progressClassName: types[type].progressClassName,
    position: options.position || 'top-right',
    autoClose: autoClose,
    draggable: options.draggable && options.draggable === false ? false : true,
    pauseOnHover: options.pauseOnHover && options.pauseOnHover === false ? false : true,
    onClose: options.onClose || null
  })
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
    return <ToastContainer closeButton={<IconCloseAlt width="12px" heigth="12px" className="c-base-inverted-1" />} />
  }
}

Notify.propTypes = {}

Notify.defaultProps = {}

export default { Notify, show }
