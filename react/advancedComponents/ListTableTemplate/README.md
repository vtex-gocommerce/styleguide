```js
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
      label: 'Name',
      id: 'name',
      size: 15,
      row: item => {
        return <span className="c-on-base lh-copy">{item.name}</span>
      }
    },
    {
      sort: true,
      size: 16,
      label: 'Address',
      id: 'address',
      row: item => {
        return item.address
      }
    }
  ]
}

const data = [
  {
    id: 1,
    name: 'Ana',
    address: 'Street A',
  },
  {
    id: 2,
    name: 'Bruna',
    address: 'Street B',
  },
  {
    id: 3,
    name: 'Clara',
    address: 'Street C',
  },
  {
    id: 4,
    name: 'Diana',
    address: 'Street D',
  }
]

const ListTableExamples = () => {
  return (
    <div>
      <div className="g-mv4">
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
      <div className="g-mv4">
        <p>With selectable</p>
        <hr />
        <ListTableTemplate pageUrl="/list">
          <div className="flex flex-column w-100 g-mt4">
            <div className="w-100 center g-mv2">
              <ListTableTemplate.Table
                tableConfig={tableConfig}
                data={data}
                selectable
                compareElements={(a: any, b: any) => a.id === b.id}
                onChange={(selected: any) => console.log('selected elements from table:', selected)}
                isLoading={false}
              />
            </div>
          </div>
        </ListTableTemplate>
      </div>
    </div>
  )
}
;<ListTableExamples />
```