```js
class NotifyExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notify: null }

    this.notify = this.notify.bind(this)
  }

  notify(type, position) {
    this.setState({
      notify: (
        <Notify
          onClose={() => this.setState({ notify: null })}
          type={type}
          position={position}
          text="Notification test Notification test Notification test"
          show={true}
          autoClose={false}
        />
      )
    })
  }

  render() {
    return (
      <div className="flex flex-column">
        <div className="mb4">
          <Button className="mr4" onClick={() => this.notify('info')}>
            Info
          </Button>
          <Button className="mr4" onClick={() => this.notify('success')}>
            Success
          </Button>
          <Button className="mr4" onClick={() => this.notify('danger')}>
            Danger
          </Button>
          <Button className="mr4" onClick={() => this.notify('warning')}>
            Warning
          </Button>
        </div>
        <div className="mb4">
          <Button className="mr4" onClick={() => this.notify('info', 'top-left')}>
            Top Left
          </Button>
          <Button className="mr4" onClick={() => this.notify('success', 'top-right')}>
            Top Rigth
          </Button>
          <Button className="mr4" onClick={() => this.notify('success', 'top-center')}>
            Top Center
          </Button>
          <Button className="mr4" onClick={() => this.notify('danger', 'bottom-left')}>
            Bottom Left
          </Button>
          <Button className="mr4" onClick={() => this.notify('danger', 'bottom-center')}>
            Bottom Center
          </Button>
          <Button className="mr4" onClick={() => this.notify('warning', 'bottom-right')}>
            Bottom Rigth
          </Button>
        </div>
        {this.state.notify}
      </div>
    )
  }
}
;<NotifyExample />
```
