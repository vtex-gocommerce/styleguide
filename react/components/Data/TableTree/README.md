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
]

const rows = [
  {
    id: 1,
    Name: 'Example Test',
    Address: 'Street of Test',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } },
    children: [
      {
        id: 6,
        Name: 'Street',
        Address: 'Lorem Ipsum',
        cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } },
      },
      {
        id: 6,
        Name: 'Street',
        Address: 'Lorem Ipsum',
        cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } },
      },
    ],
  },
  {
    id: 3,
    Name: 'Example Test',
    Address: 'Street of Test',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 3 } },
    children: [
      {
        id: 2,
        Name: 'Last Test',
        Address: 'Just a big street',
        cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 2 } }
      },
      {
        id: 4,
        Name: 'Last Test',
        Address: 'Just a big street',
        cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 4 } },
        children: [
          {
            id: 5,
            Name: 'Last Test',
            Address: 'Just a big street',
            cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 4 } }
          },
        ],
      },
    ],
  },
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
          Table Pagination is a diffente Component <a href="#tablepagination">click here</a> to check it out
        </div>
        <div>
          <div className="g-mb4 g-mt4">
            <div className="g-mb3">
              With <strong>loading</strong>:
            </div>
            <TableTree columns={columns} rows={rows} isLoading={this.state.placeholderIsActive} />
          </div>
          <div className="g-mb4 g-mt4">
            <div className="g-mb3">
              With <strong>selectable</strong>:
            </div>
            <TableTree
              columns={columns}
              rows={rows}
              selectable
            />
          </div>
        </div>
      </div>
    )
  }
}
;<TableExample />
```
