```js
class NotifyExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notify: null }

    this.notify = this.notify.bind(this)
  }

  notify(type, position) {
    Notify.show('Teste', { type: type, position: position, autoClose: 5000, onClose: () => console.log('teste') })
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

        <Notify.Notify />
      </div>
    )
  }
}
;<NotifyExample />
```
