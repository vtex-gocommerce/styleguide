```js
<div>
    <div className="dib g-mr2">
        <RadioButton name="settings" value="visible" onClick={(event)=>console.log(`Value -> ${event.target.value}`)} />
    </div>
    <div className="dib g-mr2">
        <RadioButton name="settings" value="visible" isDisabled={true} />
    </div>
    <div className="dib g-mr2">
        <RadioButton name="settings" value="enabled" onClick={(event)=>console.log(`Value -> ${event.target.value}`)} isChecked={true} width="40px" height="40px" />
    </div>
</div>
```