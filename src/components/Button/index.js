import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { type, disabled } = this.props

    let classes = 'br2 bw1 ph6 pv3 fw6 f3 '

    if (disabled) {
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
      <button type="button" className={`${classes}`} {...this.props.htmlProps} disabled={disabled}>
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  htmlProps: {},
}

Button.propTypes = {
  type: 'primary' | 'secondary' | 'outline',
  disabled: PropTypes.bool,
  className: PropTypes.string,
  htmlProps: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Button
