import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Input extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value != this.props.value) this.setState({ value: nextProps.value })
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange && this.props.onChange(event)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { hasError, isDisabled, type, placeholder } = this.props
    const { value } = this.state

    let classes = `${styles.input} pa3 ba br1 `
    if (isDisabled) classes += 'b--navy-40 bg-navy-20 navy-80 '
    if (hasError) classes += 'b--red bg-red-light red '
    if (!isDisabled && !hasError) classes += 'b--navy-40 hover-b--navy-60 bg-white navy '
    if (this.props.className) classes += this.props.className

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
  type: PropTypes.oneOf(['text', 'password', 'tel']),
  /** Set the value of the input. */
  value: PropTypes.any,
  /** Add placeholder text. */
  placeholder: PropTypes.string,
  /** Visually change input to present error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  isDisabled: PropTypes.bool,
  /** Callback on change */
  onChange: PropTypes.func,
  /** Callback on focus */
  onFocus: PropTypes.func,
  /** Callback on blur */
  onBlur: PropTypes.func,
  /** Append css classes to the Input. */
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  hasError: false,
  isDisabled: false,
  onChange: null
}

export default Input
