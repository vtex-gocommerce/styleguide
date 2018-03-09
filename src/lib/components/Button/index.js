import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const sizes = {
  large: 'ph8 pv4 f3 ',
  normal: 'ph6 pv3 f2 ',
  small: 'ph2 pv1 f1 ',
}

const types = {
  primary: 'bg-animate ba b--blue hover-b--blue-80 bg-blue hover-bg-blue-80 white pointer ',
  secondary: 'bg-animate ba b--navy hover-b--navy-80 bg-navy hover-bg-navy-80 white pointer ',
  outline: 'bg-animate ba b--blue bg-transparent hover-bg-blue-20 blue pointer ',
  danger: 'ba b--red bg-red dim white pointer ',
}

class Button extends PureComponent {
  handleClick = event => {
    !this.props.isDisabled && this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { size, type, isDisabled } = this.props

    let classes = `br2 bw1 fw6 ${sizes[size]}`
    classes += isDisabled ? 'ba b--navy-20 bg-navy-20 navy-60 ' : `${types[type]} `
    if (this.props.className) classes += this.props.className

    return (
      <button type="button" className={classes} disabled={isDisabled} onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  /** Define the size of the button. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Define how the button will look. */
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  /** Make button disabled. */
  isDisabled: PropTypes.bool,
  /** Function that will be called when user click on button. */
  onClick: PropTypes.func,
  /** Append css classes to the button. */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  size: 'normal',
  type: 'primary',
  isDisabled: false,
}

export default Button
