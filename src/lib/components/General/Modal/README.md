```js
class ShowModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalIsOpen: false }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }
  closeModal(value) {
    this.setState({ modalIsOpen: false })
  }
  openModal(value) {
    console.log('ABIUR')
    this.setState({ modalIsOpen: true })
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.openModal()}>Open Modal</Button>
        <Modal
          open={this.state.modalIsOpen}
          onClose={() => this.closeModal()}
          showCloseIcon={true}
          centered={true}
        >
          <p className="ma0 f5 navy">Upload File</p>
          <p className="mv5 navy-80">
            Upload the file with the shipping range available for this carrier.
          </p>
          <div className="mt8">
            <form>
              <div>
                <input type="file" ref="xls_file" accept=".xls, .xlsx" className="mb5 pa3 ph5 ba br1 b--navy-40 bg-navy-20" />
              </div>
              <Button
                size="large"
                style="primary"
                type="submit"
                icon={<IconUpload className="mr2" />}
              >
                Upload File
              </Button>
            </form>
          </div>
          <p className="mt6 mb0 f2">
            <a href="#" className="navy-80 link dim">Download the example file</a>
          </p>
        </Modal>
      </div>
    )
  }
};
<ShowModal />
```
