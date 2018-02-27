import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconGoogle from '../../icons/IconGoogle'

class AuthButton extends Component {
  render() {
    const { provider, url } = this.props

    let classes = 'dib br2 bw0 fw6 f3 ph5 pv3 '
    let Icon

    switch (provider) {
      default:
      case 'google':
        Icon = IconGoogle
        classes += 'white pointer no-underline bg-blue hover-bg-blue-80 '
        break
    }

    if (this.props.className) {
      classes += this.props.className
    }

    return (
      <a href={url} className={classes}>
        <Icon className="mr2" fixedWidth />
        {this.props.children}
      </a>
    )
  }
}

AuthButton.defaultProps = {
  provider: 'google',
  url: '',
}

AuthButton.propTypes = {
  /** Auth providers we accept. */
  provider: PropTypes.oneOf(['google']),
  /** URL to handle auth. */
  url: PropTypes.string,
  /** Append css classes to the button. */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default AuthButton
