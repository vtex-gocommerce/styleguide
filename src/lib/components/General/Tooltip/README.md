```js
<div className="flex flex-wrap justify-around items-center">
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="This is a tooltip!" side="top">Tooltip on top!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="This is a tooltip!" side="right">Tooltip on right!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="This is a tooltip!" side="bottom">Tooltip on bottom!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="This is a tooltip!" side="left">Tooltip on left!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="Small tooltip" size="small">Small tooltip!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="Normal tooltip" size="regular">Normal tooltip</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content="Big tooltip" size="big">Big tooltip</Tooltip>
    </div>
    <div className="mb10 navy-80 tc pointer w-25">
        <Tooltip content="Home" side="right"><IconHome /></Tooltip>
    </div>
    <div className="navy-80 underline tc pointer w-25">
        <Tooltip content="I'm following mouse!" follow>Follow mouse!</Tooltip>
    </div>
    <div className="navy-80 tc w-25">
        <Tooltip content="I'm following mouse!" isDisabled>A disabled tooltip!</Tooltip>
    </div>
    <div className="navy-80 underline tc w-25">
        <Tooltip content="I'm following mouse!" interactive>Interactive Tooltip!</Tooltip>
    </div>
    <div className="navy-80 underline tc pointer w-25">
        <Tooltip content="I'm following mouse!" trigger="click" interactive>Click me!</Tooltip>
    </div>
</div>
```