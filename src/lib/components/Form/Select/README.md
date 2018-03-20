```js
const Simple = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
  {label: 'Orange', value: 'orange'},
];

const Disabled = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
  {label: 'Orange', value: 'orange', disabled: true},
];

<div>
  <div className="mb2">
    <Select placeholder="Select a fruit..." list={Simple} />
    <span className="ml4 no-underline navy-60">Simple Select</span>
  </div>
  <div className="mb2">
    <Select placeholder="Select a fruit..." list={Disabled} />
    <span className="ml4 no-underline navy-60">Select with some disable options</span>
  </div>
  <div className="mb2">
    <Select placeholder="Select a fruit..." list={Simple} defaultValue="orange"  />
    <span className="ml4 no-underline navy-60">Select with default option</span>
  </div>
  <div className="mb2">
    <Select placeholder="Select a fruit..." list={Simple} required />
    <span className="ml4 no-underline navy-60">Placeholder can't be selected</span>
  </div>
  <div className="mb2">
    <Select placeholder="Select a fruit..." list={Simple} hasError />
    <span className="ml4 no-underline navy-60">Select with error</span>
  </div>
  <div>
    <Select placeholder="You can't pick any..." list={Simple} isDisabled />
    <span className="ml4 no-underline navy-60">Disabled Select</span>
  </div>
</div>
```
