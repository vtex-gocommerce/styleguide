```js
<div>
  <div className="dib g-mr2">
    <RadioButton
      name="settings"
      value="visible"
      className="addclasses"
      onClick={event => console.log(`Value -> ${event.target.value}`)}
    />
  </div>
  <div className="dib g-mr2">
    <RadioButton name="settings" value="visible" className="addclasses" disabled={true} />
  </div>
  <div className="dib g-mr2">
    <RadioButton
      name="settings"
      value="enabled"
      className="addclasses"
      onClick={event => console.log(`Value -> ${event.target.value}`)}
      checked={true}
      width="40px"
      height="40px"
    />
  </div>
  <div className="dib g-mr2">
    <RadioButton name="settings" value="visible" className="addclasses" label="Label" />
  </div>
</div>
```
