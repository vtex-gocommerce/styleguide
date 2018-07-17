import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class TextLimitCounter extends PureComponent {
  render() {
    const { text, limit, className } = this.props

    return (
      <span className={`c-on-base-2 o-50 ${className}`}>
        {text.length}/{limit}
      </span>
    )
  }
}

TextLimitCounter.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number,
  className: PropTypes.string
}

TextLimitCounter.defaultProps = {
  className: ''
}

export default TextLimitCounter
