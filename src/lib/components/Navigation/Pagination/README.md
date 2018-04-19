```js
class WithForcePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    const number = (Math.random(1, 15) * 100).toFixed(0)
    return (
      <div>
        <div className="flex justify-center mb5">
          <Pagination
            initialPage={parseInt(this.state.value)}
            forcePage={parseInt(this.state.value)}
            pageCount={100}
            onPageChange={data => console.log('Page changed!', data)}
            isCompact
          />
        </div>
        <div className="flex justify-center mb5">
          <Button onClick={() => this.handleChange(number)}>Next value: {parseFloat(number) + 1}</Button>
        </div>
      </div>
    )
  }
}

;<div>
  <div className="flex justify-center mb5">
    <Pagination initialPage={1} pageCount={600} onPageChange={data => console.log('Page changed!')} />
  </div>
  <div className="flex justify-center">
    <Pagination initialPage={15} pageCount={30} isCompact />
  </div>
  <div className="bt b--navy-40 pt4 mt4">
    <span className="w-100 mb3 no-underline navy-60 db tc">With force page</span>
    <WithForcePage />
  </div>
</div>
```
