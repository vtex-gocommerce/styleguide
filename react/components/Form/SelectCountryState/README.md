```js
<div>
  <div className="mb2">
    <SelectCountryStates placeholder="Select a country..." defaultCountryCode="BRA" />
    <span className="ml4 no-underline navy-60">Select with default Country Code</span>
  </div>
  <div className="mb2">
    <SelectCountryStates placeholder="Select a country..." defaultValue="BRA" />
    <span className="ml4 no-underline navy-60">Select with no Country Code</span>
  </div>
  Change CountryCode to check the change
  <div className="mv2 ">
    <SelectCountryStates placeholder="Select a country..." countryCode="ARG" />
    <span className="ml4 no-underline navy-60">Select with no Country Code</span>
  </div>
</div>
```
