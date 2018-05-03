```js
class ShowModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { placeholderIsActive: true }
    this.tooglePlaceHolderStatus = this.tooglePlaceHolderStatus.bind(this)
  }

  tooglePlaceHolderStatus(value) {
    this.setState({ placeholderIsActive: !this.state.placeholderIsActive })
  }

  render() {
    return (
      <div>
        <Button onClick={this.tooglePlaceHolderStatus}> Change status </Button> current Status:{' '}
        {this.state.placeholderIsActive ? 'active' : 'inactive'}
        <div className="pv4">
          <div className="pt4">
            Simple text
            <Placeholder className="h7 w12 mt2" isPlaceholderActive={this.state.placeholderIsActive}>
              {() => <span className="f5 fw5"> Title </span>}
            </Placeholder>
            <Placeholder className="h5 w15 mt2" isPlaceholderActive={this.state.placeholderIsActive}>
              {() => 'this is a simple text example'}
            </Placeholder>
          </div>
          <div className="pt4">
            Component
            <Placeholder className="h12 w12 br-100" isPlaceholderActive={this.state.placeholderIsActive}>
              {() => (
                <Avatar
                  size={64}
                  img="http://assets.papelpop.com/wp-content/uploads/2016/01/avatar.jpeg"
                  alt="Avatar"
                />
              )}
            </Placeholder>
          </div>
        </div>
      </div>
    )
  }
}
;<ShowModal />
```
