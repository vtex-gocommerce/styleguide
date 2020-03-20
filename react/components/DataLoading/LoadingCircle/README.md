```js
class LoadingCircleExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { percent: 0 }
    this.increase = this.increase.bind(this)
    this.restart = this.restart.bind(this)
  }

  componentDidMount() {
    this.increase()
  }

  increase() {
    const percent = this.state.percent + 1
    if (percent > 100) {
      clearTimeout(this.timeout)
      return
    }
    this.setState({ percent })
    this.tm = setTimeout(this.increase, 50)
  }

  restart() {
    clearTimeout(this.tm)
    this.setState({ percent: 0 }, () => {
      this.increase()
    })
  }

  render() {
    const { percent } = this.state

    return (
      <div class="flex justify-between">
        <div>
          <LoadingCircle current={percent} width="80px" />
        </div>
        <div class=" ">
          <LoadingCircle current={percent} width="80px" hideOnFinish={true} />
        </div>
        <div className="mt4">
          <Button onClick={this.restart}>Restart</Button>
        </div>
      </div>
    )
  }
}
;<LoadingCircleExample />
```
