Plain text input

```js
<Input />
```

Input with placeholder

```js
<Input placeholder='Look this placeholder...' />
```

Input with error

```js
<Input value='This is so wrong' hasError />
```

Input that is password

```js
<Input type='password' value='topsecret' />
```

Input Tel

```js
<Input type='tel' value='1234124' />
```

Disabled input

```js
<Input value='Disabled' isDisabled />
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
        <Input {...this.props} value={this.state.value} />
        <Button onClick={()=>this.handleChange(number)}>Next value: {number}</Button>
    </div>
  }
};
<ExternalValueProp />
```