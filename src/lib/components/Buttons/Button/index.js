import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const listOfStyles = {
  primary: `all-animate ba b--primary bg-primary c-on-primary hover-bg-dark-primary ${
    styles.activeBgActivePrimary
  } pointer `,
  secondary: `all-animate ba b--secondary bg-secondary c-white hover-bg-dark-secondary ${
    styles.activeBgActiveSecondary
  } pointer `,
  outline: `all-animate ba b--base-3 bg-outiline hover-bg-dark-outline c-on-outline ${
    styles.activeBgActiveOutline
  } pointer `,
  danger: `ba b--danger bg-danger c-on-danger hover-bg-dark-danger ${styles.activeBgActiveDanger} pointer `
}

class Button extends PureComponent {
  handleClick = event => {
    !this.props.isDisabled && this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { size, style, type, fullWidth, isDisabled, icon, name } = this.props
    const Icon = props => icon

    let classes = `inline-flex items-center justify-center g-f2 fw5 g-ph5 br2 g-h10 tc `
    classes += isDisabled ? 'ba b--base-3 bg-base-3 c-on-base-2 ' : `${listOfStyles[style]} `
    if (fullWidth) classes += 'w-100 '
    if (this.props.className) classes += this.props.className

    return (
      <button name={name} type={type} className={classes} disabled={isDisabled} onClick={this.handleClick}>
        <span>
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
