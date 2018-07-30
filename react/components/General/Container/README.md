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
              classNameArray={[['g-h8 w-30 g-mb7'], ['g-h4 w-30 g-mb5'], ['g-h10 w-80 g-mb5']]}
            >
              <div>
                <div className="flex flex-column">
                  <span class="g-f5 pb6">Title</span>
                  <span class="g-f2 g-mb6">lable</span>
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
