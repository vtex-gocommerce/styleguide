```js
<div>
    <div className="dib mr2">
        <Toggle onClick={(checked)=>console.log(`Toggle to ${checked}`)} />
    </div>
    <div className="dib mr2">
        <Toggle onClick={(checked)=>console.log(`Toggle to ${checked}`)} isChecked />
    </div>
    <div className="dib">
        <Toggle isDisabled />
    </div>
</div>
```