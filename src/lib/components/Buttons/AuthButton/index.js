import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconGoogle from '../../../icons/IconGoogle'
import IconFacebook from '../../../icons/IconFacebook'
import styles from './style.css'
const providers = {
  google: {
    classes: `c-base-1 pointer no-underline ${styles.buttonGoogle} `,
    icon: IconGoogle
  },
  facebook: {
    classes: `c-on-primary pointer no-underline ${styles.buttonFacebook} `,
    icon: IconFacebook
  }
}

class AuthButton extends PureComponent {
  render() {
    const { provider, url } = this.props
    const Icon = providers[provider].icon

    let classes = `inline-flex items-center g-f2 fw5 g-ph5 br2 g-h10 ${providers[provider].classes} `
    if (this.props.className) classes += this.props.className

    return (
      <a href={url} className={classes}>
        <Icon className="g-mr3" />
        {this.props.children}
      </a>
    )
  }
}

AuthButton.propTypes = {
  /** Auth providers we accept. */
  provider: PropTypes.oneOf(['google', 'facebook']).isRequired,
  /** URL to handle auth. */
  url: PropTypes.string,
  /** Append css classes to the button. */
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

AuthButton.defaultProps = {
  url: ''
}

export default AuthButton
