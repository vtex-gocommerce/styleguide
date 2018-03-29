```js
<div>
  <div className="mb2">
    <Input />
    <span className="ml4 no-underline navy-60">Plain Input</span>
  </div>
  <div className="mb2">
    <Input placeholder='Look this placeholder...' />
    <span className="ml4 no-underline navy-60">Input with placeholder</span>
  </div>
  <div className="mb2">
    <Input value='This is so wrong' hasError />
    <span className="ml4 no-underline navy-60">Input with error</span>
  </div>
  <div className="mb2">
    <Input type='password' value='topsecret' />
    <span className="ml4 no-underline navy-60">Password</span>
  </div>
  <div className="mb2">
    <Input type='tel' value='1234124' />
    <span className="ml4 no-underline navy-60">Telephone</span>
  </div>
  <div className="mb2">
    <Input value='Disabled' isDisabled />
    <span className="ml4 no-underline navy-60">Disabled</span>
  </div>
  <div className="mb2">
    <Input mask="+4\\9 99 999 99" alwaysShowMask={true} maskChar="_" />
    <span className="ml4 no-underline navy-60">With a mask</span>
    <div className="mt3 navy-60">
      <strong className="db mb1">How to write a mask:</strong>
      Default format characters are:
      <pre>
        9: 0-9<br />
        a: A-Z, a-z<br />
        *: A-Z, a-z, 0-9
      </pre>
      Any character can be escaped with a backslash. It will appear as a double backslash in JS strings. For example, a German phone mask with unremoveable prefix +49 will look like <strong>mask="+4\\9 99 999 99"</strong>.
    </div>
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
