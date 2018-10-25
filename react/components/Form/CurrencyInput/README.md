```js
class ExternalValueProp extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: '100.50' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    const number = (Math.random(1, 100) * 100).toFixed(1)

    return (
      <div>
        <CurrencyInput
          {...this.props}
          showCurrency={true}
          placeholder="100.00"
          value={100}
          currencyIsInteger={false}
          formatPlaceholder={true}
          currencySpec={{
            currencySymbol: 'R$',
            currencyFormatInfo: {
              currencyDecimalDigits: '2',
              currencyDecimalSeparator: ',',
              currencyGroupSeparator: '.',
              currencyGroupSize: '3',
              startsWithCurrencySymbol: true
            }
          }}
          className="g-mr2"
        />
        <Button onClick={() => this.handleChange(number)}>Next value: {number}</Button>
      </div>
    )
  }
}
;<ExternalValueProp />
```
