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
      disbled,
      type,
      placeholder,
      maxLength,
      mask,
      maskChar,
      alwaysShowMask,
      className,
      name,
      label,
      withoutStyle,
      defaultValue
    } = this.props
    const { value } = this.state

    let padding = 'g-ph4 '
    let style = `${styles.input} ba br2 g-h11 `

    let colors = ``
    if (disbled) colors += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!disbled && !hasError && !withoutStyle) colors += 'b--base-4 bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    let inputClasses = style + padding + colors + className

    const props = {
      type: type,
      name: name,
      placeholder: placeholder,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
      disabled: disbled,
      maxLength: maxLength,
      value: value,
      defaultValue: defaultValue
    }

    if (this.props.mask) {
      return (
        <InputMask
          {...props}
          className={inputClasses}
          mask={mask}
          maskChar={maskChar}
          alwaysShowMask={alwaysShowMask}
        />
      )
    }
    if (this.props.suffix) {
      return (
        <div className={`dib ${className}`}>
          <div className="flex">
            <input {...props} className={`${inputClasses} w-90 dib ba br-0 br1 br--left`} />
            <span className={`ba br2 br--right b--base-4 inline-flex items-center g-ph3 c-on-base-2`}>
              {this.props.suffix}
            </span>
          </div>
        </div>
      )
    }
    if (this.props.iconBefore) {
      return (
        <div className={`dib ${style} ${colors} ${className} overflow-hidden`}>
          <div className="flex flex-auto items-center ">
            <div className="g-pl3">{this.props.iconBefore}</div>
            <input {...props} className={`${colors} ${padding} ${style} bn w-100 dib`} />
          </div>
        </div>
      )
    } else {
      return label ? (
        <React.Fragment>
          <label className="db c-on-base-2 g-mb1 g-f2 lh-copy">{label}</label>
          <input {...props} className={inputClasses} />
        </React.Fragment>
      ) : (
        <input {...props} className={inputClasses} />
      )
    }
  }
}

Input.propTypes = {
  /** Set input's label. */
  label: PropTypes.string,
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
  disbled: PropTypes.bool,
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
  withoutStyle: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  hasError: false,
  disbled: false,
  onChange: null,
  className: '',
  maxLength: null,
  mask: null,
  maskChar: ' ',
  alwaysShowMask: false,
  suffix: null,
  iconBefore: null
}

export default Input
