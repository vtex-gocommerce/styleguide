import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      value: props.value
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange && this.props.onChange(value)
  }

  handleFocus = event => {
    this.setState({ active: true })
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.setState({ active: false })
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { hasError, isDisabled, type, placeholder } = this.props
    const { value } = this.state

    let classes = `${styles.input} pa3 ba br1 `

    if (isDisabled || hasError) {
      if (isDisabled) {
        classes += 'b--navy-40 bg-navy-20 navy-80 '
      }

      if (hasError) {
        classes += 'b--red bg-red-light red '
      }
    } else {
      classes += 'b--navy-40 hover-b--navy-60 bg-white navy '
    }

    if (this.props.className) {
      classes += this.props.className
    }

    return (
      <input
        type={type}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        className={classes}
        disabled={isDisabled}
        value={value}
      />
    )
  }
}

Input.propTypes = {
  /** Set input's type. */
  type: PropTypes.oneOf(['text', 'password']),
  /** Set the value of the input. */
  value: PropTypes.string,
  /** Add placeholder text. */
  placeholder: PropTypes.string,
  /** Visually change input to present error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  isDisabled: PropTypes.bool,
  /** Append css classes to the Input. */
  className: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  hasError: false,
  isDisabled: false
}

export default Input