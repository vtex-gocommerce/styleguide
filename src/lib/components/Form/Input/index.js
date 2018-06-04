import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import styles from './style.css'

class Input extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
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
    const {
      hasError,
      isDisabled,
      type,
      placeholder,
      maxLength,
      mask,
      maskChar,
      alwaysShowMask,
      className,
      name
    } = this.props
    const { value } = this.state

    let classes = `${styles.input} g-pa3 ba br1 `
    if (isDisabled) classes += 'ba b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) classes += 'b--danger bg-light-danger c-danger '
    if (!isDisabled && !hasError) classes += 'b--base-4 hover-b--base-3 bg-base-1 c-on-base-1 '
    if (className) classes += className

    const props = {
      type: type,
      name: name,
      placeholder: placeholder,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      className: classes,
      disabled: isDisabled,
      maxLength: maxLength,
      value: value
    }

    return this.props.mask ? (
      <InputMask {...props} mask={mask} maskChar={maskChar} alwaysShowMask={alwaysShowMask} />
    ) : (
      <input {...props} />
    )
  }
}

Input.propTypes = {
  /** Set input's name. */
  name: PropTypes.string,
  /** Set input's type. */
  type: PropTypes.oneOf(['text', 'password', 'tel', 'hidden', 'email']),
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
  /** Max number of characters */
  maxLength: PropTypes.number,
  /** Mask string. Default format characters are:
  9: 0-9
  a: A-Z, a-z
  *: A-Z, a-z, 0-9
  */
  mask: PropTypes.string,
  /** Character to cover unfilled parts of the mask */
  maskChar: PropTypes.string,
  /** Show mask when input is empty and has no focus. */
  alwaysShowMask: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  hasError: false,
  isDisabled: false,
  onChange: null,
  className: '',
  maxLength: null,
  mask: null,
  maskChar: ' ',
  alwaysShowMask: false
}

export default Input
