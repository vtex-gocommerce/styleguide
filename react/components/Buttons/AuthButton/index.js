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
    const { provider, url, id } = this.props
    const Icon = providers[provider].icon

    let classes = `inline-flex items-center justify-center f6 fw6 ph5 br2 h-large ${providers[provider].classes} `
    if (this.props.className) classes += this.props.className

    return (
      <a id={id} href={url} className={classes}>
        <Icon className="mr3" />
        {this.props.children}
      </a>
    )
  }
}

AuthButton.propTypes = {
  /** Set button's id. */
  id: PropTypes.string,
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
