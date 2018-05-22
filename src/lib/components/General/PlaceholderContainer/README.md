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
          <div className="g-pt4">
            <PlaceholderContainer
              classNameArray={['g-h10 g-w10 br-100', 'h10 w13 g-mt3', 'h10 w14 g-mt3']}
              isPlaceholderActive={this.state.placeholderIsActive}
            >
              {() => (
                <>
                  <span className="g-f5 fw5"> I can put anything in here </span>
                  <br />
                  <span className="g-f2 "> My wishs can become true, </span>
                  <br />
                  <span className="g-f4 "> I really don`t care </span>
                  <br />
                </>
              )}
            </PlaceholderContainer>
          </div>
        </div>
      </div>
    )
  }
}
;<ShowModal />
```
