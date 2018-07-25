```js
<div>
    <div className="dib g-mr2">
        <Toggle name="toggleName" value="isEnabled" onClick={(event, checked)=>console.log(`Toggle ${event.target.name} to ${checked}`)} />
    </div>
    <div className="dib g-mr2">
        <Toggle name="toggleName" value="isHuman" onClick={(event, checked)=>console.log(`Toggle ${event.target.name} to ${checked}`)} isChecked />
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