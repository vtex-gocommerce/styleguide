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
    <div className="dib g-mr2">
        <Toggle value="isActive" isChecked isDisabled />
    </div>
    <div className="dib">
        <div className="flex items-center">
            <Toggle value="isHuman" className="dib mr2" />
            Label
        </div>        
    </div>
</div>
```