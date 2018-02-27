import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { size, type, isDisabled } = this.props

    let classes = 'br2 bw1 fw6 f3 '

    switch (size) {
      case 'large':
        classes += 'ph8 pv4 '
        break
      default:
      case 'normal':
        classes += 'ph6 pv3 '
        break
      case 'small':
        classes += 'ph4 pv2 '
        break
    }

    if (isDisabled) {
      classes += 'ba b--navy-20 bg-navy-20 navy-60 '
    } else {
      switch (type) {
        default:
        case 'primary':
          classes += 'ba b--blue hover-b--blue-80 bg-blue hover-bg-blue-80 white pointer '
          break
        case 'secondary':
          classes += 'ba b--navy hover-b--navy-80 bg-navy hover-bg-navy-80 white pointer '
          break
        case 'outline':
          classes += 'ba b--blue bg-transparent hover-bg-blue blue hover-white pointer '
          break
      }
    }

    if (this.props.className) {
      classes += this.props.className
    }

    return (
      <button type="button" className={classes} {...this.props.htmlProps} disabled={isDisabled}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  /** Define the size of the button. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Define how the button will look. */
  type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  /** Make button disabled. */
  isDisabled: PropTypes.bool,
  /** Append css classes to the button. */
  className: PropTypes.string,
  htmlProps: PropTypes.object,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  size: 'normal',
  type: 'primary',
  isDisabled: false,
  htmlProps: {},
}

export default Button
