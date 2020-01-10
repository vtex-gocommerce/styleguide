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
    <Input mask="+49 99 999 99" alwaysShowMask={true} maskChar="_" />
    <span className="g-ml4 no-underline c-on-base-1">With a mask</span>
    <div className="g-mt3 c-on-base-1">
      <strong className="db g-mb1">How to write a mask:</strong>
      Default format characters are:
      <pre>
        9: 0-9
        <br />
        ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]: (555) 392-4932
      </pre>
      The way to define a mask in Text Mask is through an array.<br />
      Each element in the array has to be either a string or a regular expression. Each string is a fixed character in the mask and each regular expression is a placeholder that accepts user input.<br />
      The regular expression will be used to test user input and either allow it or reject it.<br />
      Any valid regular expressions should work.<br />
      <br />
      <strongFunction<strong><br />
      You can also pass a function as the mask. The function will receive the user input at every change. The function is expected to return a mask array as described above.<br />
      <pre>
        var mask = function(rawValue) {
          // add logic to generate your mask array
          return [ /*your mask array*/ ]
        }
      </pre>
      https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask-array
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
        <Input {...this.props} value={this.state.value} className="g-mr2" />
        <Button onClick={() => this.handleChange(number)}>Next value: {number}</Button>
      </div>
    )
  }
}
;<ExternalValueProp />
```
