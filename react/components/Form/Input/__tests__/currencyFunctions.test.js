import Functions from '../currencyFunctions'

const currencySpecBR = {
  currencySymbol: 'R$',
  currencyFormatInfo: {
    currencyDecimalDigits: 2,
    currencyGroupSize: 3,
    currencyGroupSeparator: '.',
    currencyDecimalSeparator: ',',
    startsWithCurrencySymbol: true,
  }
}

const currencySpecEUR = {
  currencySymbol: '€',
  currencyFormatInfo: {
    currencyDecimalDigits: 2,
    currencyDecimalSeparator: ",",
    currencyGroupSeparator: ".",
    currencyGroupSize: 3,
    startsWithCurrencySymbol: false,
  }
}

describe('Test currency functions', () => {
  test('currency to number as integer', () => {
    const value = 'R$ 4,10'
    const baseDivider = 100
    const props = {
      currencyIsInteger: true,
      currencySpec: currencySpecBR,
    }

    const formattedNumber = Functions.currencyToNumber(value, props, baseDivider)
    expect(formattedNumber).toEqual(410)
  })

  test('remove currency symbol', () => {
    const real = Functions.removeCurrencySymbols('R$ 42,00')
    const dolar = Functions.removeCurrencySymbols('USD 42.00')
    const pesoCL = Functions.removeCurrencySymbols('4200 CLP')

    expect(real).toEqual('42,00')
    expect(dolar).toEqual('42.00')
    expect(pesoCL).toEqual('4200')
  })

  test('format number to currency BR', () => {
    const value = '42.00'
    const props = {
      showCurrency: true,
      currencySpec: currencySpecBR,
    }
    const baseDivider = 100

    const formattedValue = Functions.toCurrency(value, props, baseDivider)

    expect(formattedValue).toEqual('R$ 42,00')
  })

  test('format number to currency EUR', () => {
    const value = '42.00'
    const props = {
      showCurrency: true,
      currencySpec: currencySpecEUR,
    }
    const baseDivider = 100

    const formattedValue = Functions.toCurrency(value, props, baseDivider)

    expect(formattedValue).toEqual('42,00 €')
  })
})