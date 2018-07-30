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
    label: <IconMoney />,
    isCentered: true,
    size: 15
  },
  {
    id: 'Count',
    label: 'Count',
    size: 10
  },
  {
    id: 'Active',
    label: 'Active'
  },
  {
    id: 'Actions',
    label: '',
    size: 7,
    isCentered: true
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
    Active: <Toggle value="isActive" isChecked />,
    Actions: <IconMore className="blue" width="20" height="20" />
  },
  {
    id: 3,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: (
      <p className="yellow">
        24 <IconWarning className="g-ml1" family="regular" />
      </p>
    ),
    Active: <Toggle value="isActive" />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    bgColor: 'danger-light'
  },
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
    Active: <Toggle value="isActive" isChecked />,
    Actions: <IconMore className="blue" width="20" height="20" />
  },
  {
    id: 3,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: (
      <p className="yellow">
        24 <IconWarning className="g-ml1" family="regular" />
      </p>
    ),
    Active: <Toggle value="isActive" />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    bgColor: 'success-light'
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
      <div className="flex flex-column">
        <div>
          <Button onClick={this.tooglePlaceHolderStatus}> Change status </Button> Is Placeholder Active:{' '}
          {this.state.placeholderIsActive ? 'active' : 'inactive'}
        </div>
        <div>
          <div className="g-mb4 g-mt4">
            Table Pagination is a diffente Component <a href="#pagepaginate">click here</a> to check it out
            <TablePagination
              recordsLabel="records found"
              total={25}
              page={1}
              perPage={15}
              handleChangePerPage={() => {}}
              handleChangePage={() => {}}
            />
            <Table columns={columns} rows={rows} isLoading={this.state.placeholderIsActive} />
          </div>
          <div className="g-mb4 g-mt4">
            <Table columns={columns} rows={rows} selectable onChange={e => console.log(e)} />
          </div>
        </div>
      </div>
    )
  }
}
;<ShowModal />
```
