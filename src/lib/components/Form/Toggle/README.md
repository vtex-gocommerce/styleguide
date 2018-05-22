```js
<div>
    <div className="dib g-mr2">
        <Toggle value="isEnabled" onClick={(checked)=>console.log(`Toggle to ${checked}`)} />
    </div>
    <div className="dib g-mr2">
        <Toggle value="isHuman" onClick={(checked)=>console.log(`Toggle to ${checked}`)} isChecked />
    </div>
    <div className="dib g-mr2">
        <Toggle value="isActive" isDisabled />
    </div>
    <div className="dib">
        <Toggle value="isActive" isChecked isDisabled />
    </div>
</div>
```