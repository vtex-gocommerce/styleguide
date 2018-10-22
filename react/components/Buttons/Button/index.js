import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconSpinner from './../../../icons/IconSpinner'
import IconCheck from './../../../icons/IconCheck'
import IconCloseAlt from './../../../icons/IconCloseAlt'
import styles from './style.css'

const listOfStyles = {
  primary: `all-animate ba b--primary bg-primary c-on-primary hover-bg-primary-dark hover-b--primary-dark ${
    styles.activeBgActivePrimary
  } pointer `,
  secondary: `all-animate ba b--base-3 bg-base-4 hover-bg-base-3 hover-b--base-3 c-on-base ${
    styles.activeBgActiveSecondary
  } pointer `,
  outline: `all-animate ba b--base-3 bg-outiline hover-bg-outline-dark c-on-outline ${
    styles.activeBgActiveOutline
  } pointer `,
  danger: `ba b--danger bg-danger c-on-danger hover-bg-danger-dark hover-b--danger-dark  ${
    styles.activeBgActiveDanger
  } pointer `
}

class Button extends PureComponent {
  handleClick = event => {
    !this.props.disabled && this.props.onClick && this.props.onClick(event)
  }

  getIcon = () => {
    const { status, icon } = this.props

    return (
      (status === 'loading' && <IconSpinner animate ignoreSize={false} />) ||
      (status === 'success' && <IconCheck />) ||
      (status === 'error' && <IconCloseAlt />) ||
      (icon || null)
    )
  }

  render() {
    const { status, style, type, fullWidth, disabled, id } = this.props

    let classes = `inline-flex items-center justify-center g-f2 fw6 g-ph5 br2 g-h11 tc `
    classes += disabled ? 'ba b--base-3 bg-base-3 c-on-base-2 ' : `${listOfStyles[style]} `
    if (fullWidth) classes += 'w-100 '
    if (this.props.className) classes += this.props.className

    const Icon = this.getIcon
    return (
      <button id={id} type={type} className={classes} disabled={disabled} onClick={this.handleClick}>
        <span>
          <Icon />
          {!status && this.props.children}
        </span>
      </button>
    )
  }
}

Button.propTypes = {
  /** Set button's id. */
  id: PropTypes.string,
  /** Define how the button will look. */
  style: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  /** Define type of the button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Define type of the button. */
  status: PropTypes.oneOf(['', 'loading', 'success', 'error']),
  /** Make button full width. */
  fullWidth: PropTypes.bool,
  /** Make button disabled. */
  disabled: PropTypes.bool,
  /** Add icon to a button. */
  icon: PropTypes.element,
  /** Function that will be called when user click on button. */
  onClick: PropTypes.func,
  /** Append css classes to the button. */
  className: PropTypes.string,
  children: PropTypes.node
}

Button.defaultProps = {
  size: 'normal',
  style: 'primary',
  type: 'button',
  status: '',
  fullWidth: false,
  disabled: false,
  onClick: null
}

export default Button
