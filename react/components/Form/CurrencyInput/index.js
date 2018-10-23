import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import styles from './style.css'

class CurrencyInput extends PureComponent {
  constructor(props) {
    super(props)

    const value = props.defaultValue || props.value

    this.state = {
      value: value > 0 ? this.toCurrency(value) : value
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  toFloatNumber = value => {
    const onlyNumber = `00${value}`.replace(/[^0-9]/gi, '')

    const floatNumber = parseFloat(`${onlyNumber.substr(0, onlyNumber.length - 2)}.${onlyNumber.substr(-2)}`) || 0

    return floatNumber
  }

  onlyNumber = value => {
    return value.toString().replace(/[^0-9]/gi, '')
  }

  toCurrency = value => {
    value = this.onlyNumber(value)

    const { currencySymbol, currencyFormatInfo } = this.props.currencySpec
    const {
      currencyDecimalDigits,
      currencyDecimalSeparator,
      currencyGroupSeparator,
      currencyGroupSize,
      startsWithCurrencySymbol
    } = currencyFormatInfo
    const separatorRegex = new RegExp(`\\B(?=(\\d{${currencyGroupSize}})+(?!\\d))`, 'g')
    const valueToNumber = +value
    const valueToFloat = valueToNumber % 1 === 0 ? valueToNumber / 100 : valueToNumber
    const valueToFixed = valueToFloat.toFixed(currencyDecimalDigits)
    const valueDividedInParts = valueToFixed.split('.')
    const decimalPart = valueDividedInParts[1]
    let wholePart = valueDividedInParts[0]
    wholePart = wholePart.replace(separatorRegex, currencyGroupSeparator)
    const valueFinal = currencyDecimalDigits > 0 ? wholePart + currencyDecimalSeparator + decimalPart : wholePart

    let formatedNumber = startsWithCurrencySymbol
      ? `${currencySymbol} ${valueFinal}`
      : `${valueFinal} ${currencySymbol}`

    if (!this.props.showCurrency) {
      formatedNumber = formatedNumber.replace(/[^0-9,.]/gi, '')
    }

    return formatedNumber
  }

  handleChange = event => {
    const formatedNumber = this.toCurrency(event.target.value)

    this.setState({ value: formatedNumber })
    event.target.value = this.toFloatNumber(formatedNumber)
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
      formatPlaceholder,
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
      defaultValue
    } = this.props
    const { value } = this.state

    let padding = 'g-ph4 f6 '
    let style = `${styles.input} ba br2 g-h11 `

    let colors = ``
    if (disabled) colors += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError && !withoutStyle) colors += 'b--base-4 bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    let inputClasses = style + padding + colors + className

    const props = {
      type: type,
      name: name,
      id: id || name,
      placeholder: formatPlaceholder ? this.toCurrency(placeholder) : placeholder,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
      disabled: disabled,
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
            <input {...props} className={`${inputClasses} w-100 dib ba br-0 br1 br--left`} />
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
      return (
        <React.Fragment>
          {label && <label className="db c-on-base-2 g-mb1 g-f2 lh-copy">{label}</label>}
          <input {...props} className={inputClasses} />
          {showMaxLength &&
            maxLength !== 0 && (
              <label
                className={`flex flex-row-reverse db g-pb2 g-pa1 g-f2 ${
                  maxLength - this.state.value.length <= 0 ? 'red' : 'c-on-base-2'
                }`}
              >
                {maxLength && maxLength - this.state.value.length}
              </label>
            )}
        </React.Fragment>
      )
    }
  }
}

CurrencyInput.propTypes = {
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
  showCurrency: PropTypes.bool,
  formatPlaceholder: PropTypes.bool,
  currencySpec: PropTypes.shape({
    currencySymbol: PropTypes.string,
    currencyFormatInfo: PropTypes.shape({
      currencyDecimalDigits: PropTypes.string,
      currencyDecimalSeparator: PropTypes.string,
      currencyGroupSeparator: PropTypes.string,
      currencyGroupSize: PropTypes.string,
      startsWithCurrencySymbol: PropTypes.bool
    })
  })
}

CurrencyInput.defaultProps = {
  type: 'text',
  showCurrency: false,
  value: '',
  placeholder: '',
  formatPlaceholder: false,
  hasError: false,
  disabled: false,
  onChange: null,
  className: '',
  maxLength: null,
  showMaxLength: false,
  mask: null,
  maskChar: ' ',
  alwaysShowMask: false,
  suffix: null,
  iconBefore: null,
  formatPlaceholder: false,
  currencySpec: {
    currencySymbol: 'R$',
    currencyFormatInfo: {
      currencyDecimalDigits: 2,
      currencyDecimalSeparator: ',',
      currencyGroupSeparator: '.',
      currencyGroupSize: 3,
      startsWithCurrencySymbol: true
    }
  }
}

export default CurrencyInput
