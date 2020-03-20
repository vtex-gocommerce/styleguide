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
            <PlaceholderContainer
              classNameArray={[
                'h12 w12 br-100 mb5',
                ['h10 w-80 mb5', 'h10 w-20 ml5'],
                ['h10 w-third', 'h10 ml5 w-two-thirds']
              ]}
              isPlaceholderActive={this.state.placeholderIsActive}
            >
              {() => (
                <>
                  <span className="f3 fw6"> I can put anything in here </span>
                  <br />
                  <span className="f6 "> My wishs can become true, </span>
                  <br />
                  <span className="f4 "> I really don`t care </span>
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
