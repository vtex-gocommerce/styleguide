```js
<div>
  <div className="dib g-mr2">
    <Toggle
      name="toggleName"
      value="isEnabled"
      onClick={(event, checked) => console.log(`Toggle ${event.target.name} to ${checked}`)}
    />
  </div>
  <div className="dib g-mr2">
    <Toggle
      name="toggleName"
      value="isHuman"
      onClick={(event, checked) => console.log(`Toggle ${event.target.name} to ${checked}`)}
      checked
    />
  </div>
  <div className="dib g-mr2">
    <Toggle value="isActive" disabled />
  </div>
  <div className="dib g-mr2">
    <Toggle value="isActive" checked disabled />
  </div>
  <div className="dib">
    <div className="flex items-center">
      <Toggle value="isHuman" className="dib mr2" label="Label" />
    </div>
  </div>
</div>
```
