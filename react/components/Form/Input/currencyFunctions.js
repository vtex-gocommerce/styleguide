const CurrencyFunctions = {
  baseDivider: currencyDecimalDigits => parseInt(`1${'0'.repeat(currencyDecimalDigits)}`),

  initialValue: (initialValue, props, _baseDivider) => {
    // Don't change `==` to `===`.
    const value = props.currencyIsInteger || initialValue == 0 // eslint-disable-line eqeqeq
      ? initialValue
      : parseFloat(initialValue * _baseDivider).toFixed(0)
    return value > 0 ? CurrencyFunctions.toCurrency(value, props, _baseDivider) : value
  },

  onlyNumber: value => {
    return value.toString().replace(/[^0-9]/gi, '')
  },

  removeCurrencySymbols: value => {
    return value.toString().replace(/[^0-9,.]/gi, '')
  },

  toCurrency: (_value, props, _baseDivider) => {
    const value = CurrencyFunctions.onlyNumber(_value)

    const { showCurrency, currencySpec } = props
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

    const valueToFloat = valueToNumber % 1 === 0 ? valueToNumber / _baseDivider : valueToNumber
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
      : CurrencyFunctions.removeCurrencySymbols(formatedNumber)
  },

  currencyToNumber: (value, props, _baseDivider) => {
    const { currencyGroupSeparator, currencyDecimalSeparator } = props.currencySpec.currencyFormatInfo
    const separatorRegex = new RegExp(`\\${currencyGroupSeparator}`, 'g')
    let number = CurrencyFunctions.removeCurrencySymbols(value)
    number = number.replace(separatorRegex, '').replace(currencyDecimalSeparator, '.')

    return props.currencyIsInteger ? parseInt(number * _baseDivider) : number
  },
}

export default CurrencyFunctions
