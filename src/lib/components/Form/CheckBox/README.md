```js
<div>
    <div className="dib mr2">
        <CheckBox value="isEnabled" onClick={(checked)=>console.log(`Toggle to ${checked}`)} />
    </div>
    <div className="dib mr2">
        <CheckBox value="isHuman" onClick={(checked)=>console.log(`Toggle to ${checked}`)} isChecked />
    </div>
    <div className="dib">
        <CheckBox value="isActive" isDisabled />
    </div>
</div>
```