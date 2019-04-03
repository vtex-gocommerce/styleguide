```js
const query = {}
const toQueryStringConfig = [
  { field: 'activeTab' },
  { field: 'searchText', nameInUrl: 'q' },
  { field: 'page', nameInUrl: 'page' },
  { field: 'perPage', nameInUrl: 'perPage' },
  {
    field: 'sort',
    nameInUrl: 'sort',
    format: sort => `${sort.field}|${sort.direction}`
  }
]

const tableConfig = {
  columns: [
    {
      sort: true,
      label: 'ID',
      id: 'orderId',
      size: 15,
      row: item => {
        return <span className="c-on-base lh-copy">{item.orderId}</span>
      }
    },
    {
      sort: true,
      size: 16,
      label: 'Name',
      id: 'creationDate',
      row: item => {
        return item.creationDate
      }
    }
  ]
}

;<div>
  <p>Minimal Config</p>
  <hr />
  <ListTableTemplate pageUrl="/list">
    <ListTableTemplate.Filter />
    <div className="flex flex-column w-100 g-mt4">
      <ListTableTemplate.Pagination />
      <div className="w-100 center g-mv2">
        <ListTableTemplate.Table tableConfig={tableConfig} data={[]} isLoading={true} />
      </div>
    </div>
    <ListTableTemplate.Pagination />
  </ListTableTemplate>
</div>
```