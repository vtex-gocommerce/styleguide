```js
<div>
    <div className="dib g-mr2">
        <Badge count={5} />
    </div>
    <div className="dib">
        <Badge count={3} outline />
    </div>
</div>
```

Badge with Icon

```js
<div>
    <div className="dib g-mr10">
        <Badge count={8} size={16} icon={<IconBell ignoreSize />} />
    </div>
    <div className="dib g-mr10">
        <Badge count={56} size={32} outline icon={<IconFilter width="64px" height="64px"/>} />
    </div>
    <div className="dib">
        <Badge count={565} size={64} icon={<IconFilter />} />
    </div>
</div>
```