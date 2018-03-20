```js
<div className="flex flex-wrap justify-around items-center">
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>This is a tooltip!</div>} side="top">Tooltip on top!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>This is a tooltip!</div>} side="right">Tooltip on right!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>This is a tooltip!</div>} side="bottom">Tooltip on bottom!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>This is a tooltip!</div>} side="left">Tooltip on left!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>Small tooltip!</div>} size="small">Small tooltip!</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>Normal tooltip!</div>} size="regular">Normal tooltip</Tooltip>
    </div>
    <div className="mb10 navy-80 underline tc pointer w-25">
        <Tooltip content={<div>Big tooltip!</div>} size="big">Big tooltip</Tooltip>
    </div>
    <div className="mb10 navy-80 tc pointer w-25">
        <Tooltip content={<div>Home</div>} side="right"><IconHome /></Tooltip>
    </div>
    <div className="navy-80 underline tc pointer w-25">
        <Tooltip content={<div>I'm following mouse!</div>} follow>Follow mouse!</Tooltip>
    </div>
    <div className="navy-80 tc w-25">
        <Tooltip content={<div>Disabled tooltip!</div>} isDisabled>A disabled tooltip!</Tooltip>
    </div>
    <div className="navy-80 underline tc w-25">
        <Tooltip content={<div>My content can be selected!</div>}interactive>Interactive Tooltip!</Tooltip>
    </div>
    <div className="navy-80 underline tc pointer w-25">
        <Tooltip content={<div>Click outside me!</div>} trigger="click" interactive>Click me!</Tooltip>
    </div>
</div>
```