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
    const { placeholderIsActive } = this.state
    return (
      <div className="flex flex-column">
        <div>
          <Button onClick={this.tooglePlaceHolderStatus}> Change status </Button> Is Placeholder Active:
          {placeholderIsActive ? 'active' : 'inactive'}
        </div>
        <div class="bg-base-2 ">
          <div class="bg-base-2 w-80 center">
            <Container
              isPlaceholderActive={placeholderIsActive}
              classNameArray={[['h8 w-30 mb7'], ['h4 w-30 mb5'], ['h10 w-80 mb5']]}
            >
              <div>
                <div className="flex flex-column">
                  <span class="f3 pb6">Title</span>
                  <span class="f6 mb6">lable</span>
                </div>
                <div class="flex">
                  <Input /> <Button>Ok</Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}
;<ShowModal />
```
