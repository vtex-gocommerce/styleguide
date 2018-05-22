```js
<div>
    <div className="dib g-mr2">
        <CheckBox name="settings" value="enabled" onClick={(checked)=>console.log(`Toggle to ${checked}`)} />
    </div>
    <div className="dib g-mr2">
        <CheckBox name="settings" value="visible" onClick={(checked)=>console.log(`Toggle to ${checked}`)} isChecked />
    </div>
    <div className="dib">
        <CheckBox value="isActive" isDisabled />
    </div>
</div>
```