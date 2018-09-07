```js
<div>
  <div className="g-mb2">
    <Input label="Label of input" />
    <span className="g-ml4 no-underline c-on-base-1">With Label</span>
  </div>
  <div className="g-mb2">
    <Input />
    <span className="g-ml4 no-underline c-on-base-1">Plain Input</span>
  </div>
  <div className="g-mb2">
    <Input placeholder="Look this placeholder..." />
    <span className="g-ml4 no-underline c-on-base-1">Input with placeholder</span>
  </div>
  <div className="g-mb2">
    <Input value="This is so wrong" hasError />
    <span className="g-ml4 no-underline c-on-base-1">Input with error</span>
  </div>
  <div className="g-mb2">
    <Input type="password" value="topsecret" />
    <span className="g-ml4 no-underline c-on-base-1">Password</span>
  </div>
  <div className="g-mb2">
    <Input type="tel" value="1234124" />
    <span className="g-ml4 no-underline c-on-base-1">Telephone</span>
  </div>
  <div className="g-mb2">
    <Input type="text" value="" suffix="kg" />
    <span className="g-ml4 no-underline c-on-base-1">Suffix</span>
  </div>
  <div className="g-mb2">
    <Input value="Disabled" disabled />
    <span className="g-ml4 no-underline c-on-base-1">Disabled</span>
  </div>
  <div className="g-mb2">
    <Input iconBefore={<IconSearch className="c-base-4" />} />
    <span className="g-ml4 no-underline c-on-base-1">Icon Prefix</span>
  </div>
  <div className="g-mb2">
    <Input mask="+4\\9 99 999 99" alwaysShowMask={true} maskChar="_" />
    <span className="g-ml4 no-underline c-on-base-1">With a mask</span>
    <div className="g-mt3 c-on-base-1">
      <strong className="db g-mb1">How to write a mask:</strong>
      Default format characters are:
      <pre>
        9: 0-9
        <br />
        a: A-Z, a-z
        <br />
        *: A-Z, a-z, 0-9
      </pre>
      Any character can be escaped with a backslash. It will appear as a double backslash in JS strings. For example, a German
      phone mask with unremoveable prefix +49 will look like <strong>mask="+4\\9 99 999 99"</strong>.
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
    const number = (Math.random(1, 100) * 100).toFixed(1)

    return (
      <div>
        <CurrencyInput {...this.props} value={this.state.value} className="g-mr2" />
        <Button onClick={() => this.handleChange(number)}>Next value: {number}</Button>
      </div>
    )
  }
}
;<ExternalValueProp />
```
