```js
<div>
  <div className="mb2">
    <Input />
    <span class="ml4 no-underline navy-60">Plain Input</span>
  </div>
  <div className="mb2">
    <Input placeholder='Look this placeholder...' />
    <span class="ml4 no-underline navy-60">Input with placeholder</span>
  </div>
  <div className="mb2">
    <Input value='This is so wrong' hasError />
    <span class="ml4 no-underline navy-60">Input with error</span>
  </div>
  <div className="mb2">
    <Input type='password' value='topsecret' />
    <span class="ml4 no-underline navy-60">Password</span>
  </div>
  <div className="mb2">
    <Input type='tel' value='1234124' />
    <span class="ml4 no-underline navy-60">Telephone</span>
  </div>
  <div className="mb2">
    <Input value='Disabled' isDisabled />
    <span class="ml4 no-underline navy-60">Disabled</span>
  </div>
</div>
```

Receive value from another component

```js
class ExternalValueProp extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    const number = (Math.random(1,100) * 100).toFixed(1);

    return <div>
        <Input {...this.props} value={this.state.value} className="mr2" />
        <Button onClick={()=>this.handleChange(number)}>Next value: {number}</Button>
    </div>
  }
};
<ExternalValueProp />
```