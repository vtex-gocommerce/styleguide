import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

import styles from './style.css'

import InputLabel from '../InputLabel/index'

class Input extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue || props.value,
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
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

  handleKeyPress = event => {
    this.props.onKeyPress && this.props.onKeyPress(event)
  }

  handleKeyDown = event => {
    this.props.onKeyDown && this.props.onKeyDown(event)
  }

  handleKeyUp = event => {
    this.props.onKeyUp && this.props.onKeyUp(event)
  }

  render() {
    const {
      hasError,
      disabled,
      type,
      placeholder,
      maxLength,
      showMaxLength,
      mask,
      maskChar,
      alwaysShowMask,
      className,
      name,
      id,
      label,
      withoutStyle,
      defaultValue,
      readOnly,
      required,
      min,
      max,
      step,
    } = this.props
    const { value } = this.state

    const padding = 'g-ph4 f6 '
    const style = `${styles.input} ba br2 g-h11 `

    let colors = ''
    const isDisableAspect = disabled || readOnly
    if (isDisableAspect) colors += 'b--base-4 bg-base-2 c-on-base-2 '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!isDisableAspect && !hasError && !withoutStyle) colors += 'b--base-4 bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    const inputClasses = style + padding + colors + className

    const inputId = id || name
    const props = {
      id: inputId,
      type,
      name,
      placeholder,
      disabled,
      readOnly,
      maxLength,
      value: value || '',
      defaultValue,
      autoComplete: 'off',
      min,
      max,
      step,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
    }

    const LabelComponent = (
      <InputLabel
        text={label}
        required={required}
        hasError={hasError}
        htmlFor={inputId}
      />
    )

    if (this.props.mask) {
      return (
        <React.Fragment>
          {LabelComponent}
          <InputMask
            {...props}
            className={inputClasses}
            mask={mask}
            maskChar={maskChar}
            alwaysShowMask={alwaysShowMask}
          />
        </React.Fragment>
      )
    }
    if (this.props.suffix) {
      return (
        <React.Fragment>
          {LabelComponent}
          <div className={`dib ${className}`}>
            <div className="flex">
              <input {...props} className={`${inputClasses} w-100 dib ba br-0 br1 br--left`} />
              <span
                className={`ba br2 br--right inline-flex items-center g-ph3 ${!hasError ? 'c-on-base-2' : ''} ${colors}`}
              >
                {this.props.suffix}
              </span>
            </div>
          </div>
        </React.Fragment>
      )
    }
    if (this.props.iconBefore) {
      return (
        <React.Fragment>
          {LabelComponent}
          <div className={`dib ${style} ${colors} ${className} overflow-hidden`}>
            <div className="flex flex-auto items-center ">
              <div className="g-pl3">{this.props.iconBefore}</div>
              <input {...props} className={`${colors} ${padding} ${style} bn w-100 dib`} />
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {LabelComponent}
        <input {...props} className={inputClasses} />
        {showMaxLength && maxLength !== 0 && (
          <InputLabel
            text={`${maxLength && maxLength - this.state.value.length}`}
            className="flex flex-row-reverse db g-pb2 g-pa1 g-f2"
            hasError={maxLength - this.state.value.length <= 0}
          />
        )}
      </React.Fragment>
    )
  }
}

Input.propTypes = {
  /** Set input's label. */
  label: PropTypes.string,
  /** Set input's name. */
  name: PropTypes.string,
  /** Set input's id. */
  id: PropTypes.string,
  /** Set input's type. */
  type: PropTypes.oneOf(['text', 'password', 'tel', 'hidden', 'email', 'number']),
  /** Set the value of the input. */
  value: PropTypes.any,
  /** Set the DefaultValue of the input. */
  defaultValue: PropTypes.any,
  /** Add placeholder text. */
  placeholder: PropTypes.string,
  /** Make it obligatory */
  required: PropTypes.bool,
  /** Visually change input to present error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  disabled: PropTypes.bool,
  /** Autocomplet props */
  autoComplete: PropTypes.string,
  /** Callback on change */
  readOnly: PropTypes.bool,
  /** Callback on change */
  onChange: PropTypes.func,
  /** Callback on focus */
  onFocus: PropTypes.func,
  /** Callback on blur */
  onBlur: PropTypes.func,
  /** Callback on key press */
  onKeyPress: PropTypes.func,
  /** Callback on key down */
  onKeyDown: PropTypes.func,
  /** Callback on key up */
  onKeyUp: PropTypes.func,
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** Max number of characters */
  maxLength: PropTypes.number,
  /** Show Maxlength counter*/
  showMaxLength: PropTypes.bool,
  /** Mask string. Default format characters are:
  9: 0-9
  a: A-Z, a-z
  *: A-Z, a-z, 0-9
  */
  mask: PropTypes.string,
  /** Character to cover unfilled parts of the mask */
  maskChar: PropTypes.string,
  /** Show mask when input is empty and has no focus. */
  alwaysShowMask: PropTypes.bool,
  /** Show a field after input. */
  suffix: PropTypes.string,
  /** Show a icon before input. */
  iconBefore: PropTypes.element,
  /** remove borders and bgColor. */
  withoutStyle: PropTypes.bool,
  /** min limit to number input */
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** max limit to number input */
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** increment/decrement steps to number input */
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  onChange: null,
  autoComplete: 'on',
  readOnly: false,
  className: '',
  maxLength: null,
  showMaxLength: false,
  mask: null,
  maskChar: ' ',
  alwaysShowMask: false,
  suffix: null,
  iconBefore: null,
  required: false,
}

export default Input
