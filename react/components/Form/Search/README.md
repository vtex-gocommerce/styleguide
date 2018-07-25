```js
const options = [{ label: 'Order Number', value: 'order_number' }, { label: 'Customer Name', value: 'customer_name' }]
;<div>
  <div className="g-mb4 bg-base-inverted">
    <div className="g-mb2 no-underline c-on-base-1">Search</div>
    <Search onClick={values => console.log(values)} />
  </div>

  <div className="g-mb4">
    <div className="g-mb2 no-underline c-on-base-1">Search Nav</div>
    <Search onClick={values => console.log(values)} nav size="small" />
  </div>

  <div className="g-mb4">
    <div className="g-mb2 no-underline c-on-base-1">Search with Options</div>
    <Search
      withOptions
      options={options}
      placeholder="Search by order number or customer name..."
      onClick={values => console.log(values)}
    
    />
  </div>
  <div>
    <div className="g-mb2 no-underline c-on-base-1">Search with Options</div>
    <Search
      withOptions
      options={options}
      placeholder="Search by order number or customer name..."
      onClick={values => console.log(values)}
      searchValue="788978"
      optionValue="order_number"
    />
  </div>
</div>
```
