```js
class WithState extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 1 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <div className="flex justify-center g-mb5">
          <Pagination currentPage={this.state.value} pageCount={30} onPageChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

;<div>
  <div className="flex justify-center g-mb5">
    <Pagination
      currentPage={1}
      pageCount={600}
      onPageChange={page => console.log('Page changed! current page:' + page)}
    />
  </div>
  <div className="flex justify-center g-mb5">
    <Pagination currentPage={30} pageCount={30} />
  </div>
  <div className="flex justify-center">
    <div>
      <p>With page change</p>
      <WithState />
    </div>
  </div>
</div>
```
