```js
const columns = [
  {
    id: 'Name',
    label: 'Name'
  },
  {
    id: 'Address',
    label: 'Address'
  },
  {
    id: 'Price',
    label: <IconMoneyBill />,
    isCentered: true,
    size: 15,
    textAlign: 'center'
  },
  {
    id: 'Count',
    label: 'Count',
    size: 10,
    textAlign: 'center'
  },
  {
    id: 'Active',
    label: 'Active',
    textAlign: 'right'
  }
]

const rows = [
  {
    id: 1,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: (
      <div>
        <span className="navy-60 strike">$ 2399.00</span>
        <br />$ 2199.90
      </div>
    ),
    Active: 'Active'
  },
  {
    id: 3,
    Name: 'Last Test',
    Address: 'Just a big street, also to see what will happen',
    Count: (
      <p className="yellow">
        24 <IconExclamationTriangle className="g-ml1" family="regular" />
      </p>
    ),
    Active: 'Inactive'
  }
]

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
        <Button onClick={this.tooglePlaceHolderStatus}> Change status </Button> Is Placeholder Active:{' '}
        {this.state.placeholderIsActive ? 'active' : 'inactive'}
        <div>
          <div className="g-pb7 g-pt7">
            <TableList columns={columns} rows={rows} isLoading={this.state.placeholderIsActive} />
          </div>
          <div className="g-pb7 g-pt7 bt bt--black">
            <TableList columns={columns} rows={rows} selectable onChange={e => console.log(e)} />
          </div>
        </div>
      </div>
    )
  }
}
;<ShowModal />
```
