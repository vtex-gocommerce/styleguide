import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Textarea extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.defaultValue || props.value,
      maxLength: props.maxLength || null,
      currentLength: props.value.length || 0
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value, currentLength: nextProps.value.length })
    }
  }

  handleChange = event => {
    const value = event.target.value
    const currentLength = value.length
    const isLengthBelowMax = !this.state.maxLength || currentLength <= this.state.maxLength
    isLengthBelowMax && this.setState({ value, currentLength })
    isLengthBelowMax && this.props.onChange && this.props.onChange(event)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { hasError, disabled, type, placeholder, className, name, style, rows, resize } = this.props
    const { value, currentLength, maxLength } = this.state
    const currentCharacterIndex = maxLength - currentLength

    let inputClasses = `${styles.input} g-pa3 ba br1 `
    if (disabled) inputClasses += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) inputClasses += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError) inputClasses += 'b--base-4 bg-base-1 c-on-base-1 '

    inputClasses += className

    const props = {
      type: type,
      name: name,
      placeholder: placeholder,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      disabled: disabled,
      style: { ...style, resize: !resize ? 'none' : 'vertical' },
      rows: rows
    }

    return (
      <React.Fragment>
        <textarea {...props} className={inputClasses} value={value} />
        {maxLength !== 0 && (
          <label
            className={`flex flex-row-reverse db g-pb2 g-pa1 g-f2 ${
              currentCharacterIndex <= 0 ? 'red' : 'c-on-base-2'
            }`}
          >
            {maxLength && currentCharacterIndex}
          </label>
        )}
      </React.Fragment>
    )
  }
}

Textarea.propTypes = {
  /** Set input's name. */
  name: PropTypes.string,
  /** Set the defaultValue of the TextArea. */
  defaultValue: PropTypes.any,
  /** Set the value of the TextArea. */
  value: PropTypes.any,
  /** Add placeholder text. */
  placeholder: PropTypes.string,
  /** Visually change input to present error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  disabled: PropTypes.bool,
  /** Callback on change */
  onChange: PropTypes.func,
  /** Callback on focus */
  onFocus: PropTypes.func,
  /** Callback on blur */
  onBlur: PropTypes.func,
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** add style. */
  style: PropTypes.object,
  /** textarea rows. */
  rows: PropTypes.number,
  /** textarea rows. */
  maxLength: PropTypes.number,
  /** textarea rows. */
  resize: PropTypes.bool
}

Textarea.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  onChange: null,
  className: '',
  style: null,
  rows: 5,
  resize: true
}

export default Textarea
