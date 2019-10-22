import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

import styles from './style.css'

import InputLabel from '../InputLabel/index'

class CurrencyInput extends PureComponent {
  _baseDivider

  constructor(props) {
    super(props)

    this._baseDivider = parseInt(`1${'0'.repeat(props.currencySpec.currencyFormatInfo.currencyDecimalDigits)}`)

    const initialValue = props.defaultValue || props.value
    const value = props.currencyIsInteger || initialValue == 0
      ? initialValue
      : parseFloat(initialValue * this._baseDivider).toFixed(0)

    this.state = {
      value: value > 0 ? this.toCurrency(value) : value
    }
  }

  onlyNumber = value => {
    return value.toString().replace(/[^0-9]/gi, '')
  }

  removeCurrencySymbols = value => {
    return value.toString().replace(/[^0-9,.]/gi, '')
  }

  toCurrency = _value => {
    const value = this.onlyNumber(_value)

    const { showCurrency, currencySpec } = this.props
    const { currencySymbol, currencyFormatInfo } = currencySpec
    const {
      currencyDecimalDigits,
      currencyDecimalSeparator,
      currencyGroupSeparator,
      currencyGroupSize,
      startsWithCurrencySymbol,
    } = currencyFormatInfo
    const separatorRegex = new RegExp(`\\B(?=(\\d{${currencyGroupSize}})+(?!\\d))`, 'g')
    const valueToNumber = +value

    const valueToFloat = valueToNumber % 1 === 0 ? valueToNumber / this._baseDivider : valueToNumber
    const valueToFixed = valueToFloat.toFixed(currencyDecimalDigits)
    const valueDividedInParts = valueToFixed.split('.')
    const decimalPart = valueDividedInParts[1]
    const wholePart = valueDividedInParts[0].replace(separatorRegex, currencyGroupSeparator)
    const valueFinal = currencyDecimalDigits > 0 ? wholePart + currencyDecimalSeparator + decimalPart : wholePart

    const formatedNumber = startsWithCurrencySymbol
      ? `${currencySymbol} ${valueFinal}`
      : `${valueFinal} ${currencySymbol}`

    return showCurrency
      ? formatedNumber
      : this.removeCurrencySymbols(formatedNumber)
  }

  currencyToNumber = value => {
    const { currencyGroupSeparator, currencyDecimalSeparator } = this.props.currencySpec.currencyFormatInfo
    const separatorRegex = new RegExp(`\\${currencyGroupSeparator}`, 'g')
    let number = this.removeCurrencySymbols(value)
    number = number.replace(separatorRegex, '').replace(currencyDecimalSeparator, '.')

    return this.props.currencyIsInteger ? parseInt(number * this._baseDivider) : number
  }

  handleChange = event => {
    const formatedNumber = this.toCurrency(event.target.value)

    this.setState({ value: formatedNumber })
    event.target.value = this.currencyToNumber(formatedNumber)

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
      required,
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

    const inputId = id || name
    const props = {
      type: type,
      name: name,
      id: inputId,
      placeholder: formatPlaceholder ? this.toCurrency(placeholder) : placeholder,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
      disabled: disabled,
      maxLength: maxLength,
      value: value || '',
      autoComplete: 'off',
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
              <span className={`ba br2 br--right b--base-4 inline-flex items-center g-ph3 c-on-base-2`}>
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
  /** Make it obligatory */
  required: PropTypes.bool,
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
  currencyIsInteger: PropTypes.bool,
  currencySpec: PropTypes.shape({
    currencySymbol: PropTypes.string,
    currencyFormatInfo: PropTypes.shape({
      currencyDecimalDigits: PropTypes.number,
      currencyDecimalSeparator: PropTypes.string,
      currencyGroupSeparator: PropTypes.string,
      currencyGroupSize: PropTypes.number,
      startsWithCurrencySymbol: PropTypes.bool
    })
  })
}

CurrencyInput.defaultProps = {
  type: 'text',
  showCurrency: false,
  currencyIsInteger: false,
  value: '',
  placeholder: '',
  required: false,
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
