import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconGoogle from '../../../icons/IconGoogle'

const providers = {
  google: {
    classes: 'white pointer no-underline bg-blue hover-bg-blue-80',
    icon: IconGoogle
  }
}

class AuthButton extends PureComponent {
  render() {
    const { provider, url } = this.props
    const Icon = providers[provider].icon

    let classes = `dib br2 bw0 fw6 f3 ph5 pv3 ${providers[provider].classes} `
    if (this.props.className) classes += this.props.className

    return (
      <a href={url} className={classes}>
        <Icon className="mr3" />
        {this.props.children}
      </a>
    )
  }
}

AuthButton.propTypes = {
  /** Auth providers we accept. */
  provider: PropTypes.oneOf(['google']),
  /** URL to handle auth. */
  url: PropTypes.string,
  /** Append css classes to the button. */
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

AuthButton.defaultProps = {
  provider: 'google',
  url: ''
}

export default AuthButton
