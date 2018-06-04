import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const sizes = {
  large: 'g-ph8 g-pv4 g-f3 ',
  normal: 'g-ph6 g-pv3 g-f2 ',
  small: 'g-ph2 g-pv1$2 g-f1 '
}

const styles = {
  primary: 'all-animate ba b--primary bg-primary c-on-primary dim pointer ',
  secondary: 'all-animate ba b--navy bg-navy c-white dim pointer ',
  outline: 'all-animate ba b--base-3 bg-transparent hover-bg-base-3 c-on-base-1 pointer ',
  danger: 'ba b--danger bg-danger c-on-danger dim pointer '
}

class Button extends PureComponent {
  handleClick = event => {
    !this.props.isDisabled && this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { size, style, type, fullWidth, isDisabled, icon, name } = this.props
    const Icon = props => icon

    let classes = `br2 fw6 ${sizes[size]}`
    classes += isDisabled ? 'ba b--base-3 bg-base-3 c-on-base-2 ' : `${styles[style]} `
    if (fullWidth) classes += 'w-100 '
    if (this.props.className) classes += this.props.className

    return (
      <button name={name} type={type} className={classes} disabled={isDisabled} onClick={this.handleClick}>
        <span className="flex justify-center items-center">
          {icon && <Icon />}
          {this.props.children}
        </span>
      </button>
    )
  }
}

Button.propTypes = {
  /** Set button's name. */
  name: PropTypes.string,
  /** Define the size of the button. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Define how the button will look. */
  style: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  /** Define type of the button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Make button full width. */
  fullWidth: PropTypes.bool,
  /** Make button disabled. */
  isDisabled: PropTypes.bool,
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
  fullWidth: false,
  isDisabled: false,
  onClick: null
}

export default Button
