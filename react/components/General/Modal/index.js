import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ModalComponent from 'react-responsive-modal'
import style from './style.css'
import IconCloseAlt from './../../../icons/IconCloseAlt'

class Modal extends PureComponent {
  handleClose = event => {
    this.props.onClose(event)
  }
  render() {
    const { open, showCloseIcon, centered, className } = this.props
    return (
      <ModalComponent
        open={open}
        onClose={this.handleClose}
        closeIconSvgPath={<IconCloseAlt />}
        classNames={{
          overlay: `${style.overlay} ${centered ? style.toCenter : style.toTop}`,
          modal: `br4 br--top br2-ns overflow-y-auto w-100 w-auto-ns ${className} ${style.modal}`,
          closeIcon: `${style.closeIcon}`
        }}
        showCloseIcon={showCloseIcon}
        little={centered}
      >
        <div>{this.props.children}</div>
      </ModalComponent>
    )
  }
}

Modal.propTypes = {
  /** Open and close the modal */
  open: PropTypes.bool.isRequired,
  /** Show or hide the close icon */
  showCloseIcon: PropTypes.bool.isRequired,
  /** Use false for modal with a lot of content */
  centered: PropTypes.bool,
  /** Append css classes to the Modal. */
  className: PropTypes.bool,
  /** Function that will be called for close the modal */
  onClose: PropTypes.func,
  children: PropTypes.node
}

Modal.defaultProps = {
  open: false,
  showCloseIcon: true,
  centered: true,
  onClose: null
}

export default Modal
