```js
// Use "import { Link } from 'vtex.render-runtime'"
Link = props => {
  return (
    <a href="#a" className={props.className}>
      {props.children}
    </a>
  )
}

const columns = [
  {
    id: 'Name',
    label: 'Name',
    cellWrapper: Link
  },
  {
    id: 'Address',
    label: 'Address',
    cellWrapper: Link
  },
  {
    id: 'Price',
    label: <IconMoneyBill />,
    textAlign: 'center',
    size: 15,
    cellWrapper: Link
  },
  {
    id: 'Count',
    label: 'Count',
    size: 10,
    cellWrapper: Link
  },
  {
    id: 'Active',
    label: 'Active',
    size: 10,
    textAlign: 'center'
  },
  {
    id: 'Actions',
    label: '',
    size: 7,
    textAlign: 'center'
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
        <br />
        <span className="navy-60">$ 2299.00</span>
      </div>
    ),
    Active: <Toggle value="isActive" checked />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } }
  },
  {
    id: 2,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: (
      <span className="yellow">
        24 <IconExclamationTriangle className="ml1 v-top" family="regular" />
      </span>
    ),
    Active: <Toggle value="isActive" />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    bgColor: 'danger-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 2 } }
  },
  {
    id: 3,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: (
      <div>
        <span className="navy-60 strike">$ 2399.00</span>
      </div>
    ),
    Active: <Toggle value="isActive" checked />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 3 } }
  },
  {
    id: 4,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: (
      <span className="yellow">
        24 <IconExclamationTriangle className="ml1 v-top" family="regular" />
      </span>
    ),
    Active: <Toggle value="isActive" />,
    Actions: <IconMore className="blue" width="20" height="20" />,
    bgColor: 'success-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 4 } }
  }
]

const selectableData = [
  {
    id: 1,
    Name: 'Example Test',
    Address: 'Street of Test',
    City: 'Example Town',
    Count: 245,
    Price: '2399.00',
  },
  {
    id: 2,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: 24,
  },
  {
    id: 3,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: '2399.00'
  },
  {
    id: 4,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: 24,
  }
]

class TableExample extends React.Component {
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
          <Button onClick={this.tooglePlaceHolderStatus}> Change status</Button> Is placeholder active:{' '}
          {this.state.placeholderIsActive ? 'active' : 'inactive'}
          <br />
          <br />
          Table Pagination is a different Component <a href="#tablepagination">click here</a> to check it out
        </div>
        <div>
          <div className="mb4 mt4">
            <div className="mb3">
              With <strong>loading</strong>:
            </div>
            <Table columns={columns} rows={rows} isLoading={this.state.placeholderIsActive} />
          </div>
          <div className="mb4 mt4">
            <div className="mb3">
              With <strong>selectable</strong>:
            </div>
            <Table
              actions={<span class="hover-blue f6 pointer">Remover</span>}
              columns={columns}
              rows={rows}
              data={selectableData}
              selectable
              onChange={selectedData => {
                console.log('Selected rows data: ', selectedData)
              }}
            />
          </div>
          <div className="mb4 mt4">
            <div className="mb3">
              With <strong>Placeholder Large</strong>:
            </div>
            <Table columns={columns} rows={rows} placeholderSize="large" isLoading={this.state.placeholderIsActive} />
          </div>
        </div>
      </div>
    )
  }
}
;<TableExample />
```
