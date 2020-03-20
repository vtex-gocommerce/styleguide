```js
<div>
  <div className="mb2">
    <SelectCountry placeholder="Select a country..." />
    <span className="ml4 no-underline navy-60">Simple Select</span>
  </div>
  <div className="mb2">
    <SelectCountry placeholder="Select a country..." defaultValue="BRA" />
    <span className="ml4 no-underline navy-60">Select with default option</span>
  </div>
  <div className="mb2">
    <SelectCountry placeholder="Select a country..." required />
    <span className="ml4 no-underline navy-60">Placeholder can't be selected</span>
  </div>
  <div className="mb2">
    <SelectCountry placeholder="Select a country..." hasError />
    <span className="ml4 no-underline navy-60">Select with error</span>
  </div>
  <div>
    <SelectCountry placeholder="You can't pick any..." disabled />
    <span className="ml4 no-underline navy-60">Disabled Select</span>
  </div>
</div>
```
