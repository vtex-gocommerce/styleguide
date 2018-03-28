import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ModalComponent from 'react-responsive-modal'

class Modal extends PureComponent {
  handleClose = event => {
    this.props.onClose(event)
  }
  render() {
    const { open, showCloseIcon, centered } = this.props
    return (
      <ModalComponent
        open={open}
        onClose={this.handleClose}
        classNames={{ modal: 'br2', closeIcon: 'navy' }}
        showCloseIcon={showCloseIcon}
        little={centered}
      >
        <div className="pa5">
          {this.props.children}
        </div>
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
  /** Function that will be called for close the modal */
  onClose: PropTypes.func,
  children: PropTypes.node,
}

Modal.defaultProps = {
  open: false,
  showCloseIcon: true,
  centered: true,
  onClose: null,
}

export default Modal
