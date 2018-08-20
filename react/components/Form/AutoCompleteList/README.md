```js
<div style={{ height: '250px' }}>
  <div className="db">
    <div className="relative">
      <Input placeholder="this is a input example" className="w-100" iconBefore={<IconSearch />} />
      <AutoCompleteList
        list={[
          { id: '1', label: 'Item1' },
          { id: '2', label: 'Item2' },
          { id: '3', label: 'Item3' },
          { id: '4', label: 'Item4' },
          { id: '5', label: 'Item5' },
          { id: '6', label: 'Item6' },
          { id: '7', label: 'Morango' },
          { id: '8', label: 'Mamão' },
          { id: '9', label: 'Limão' }
        ]}
        onClick={selected => console.log(selected)}
      />
    </div>
  </div>
</div>
```
