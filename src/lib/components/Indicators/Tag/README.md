```js
<div>
  <div className="dib g-mr2">
    <Tag bgColor="primary">Tag</Tag>
  </div>
  <div className="dib">
    <Tag onRemove={() => console.log('Tag removed!')}>Tag</Tag>
  </div>
  <div className="dib">
    <Tag style="primary" onRemove={() => console.log('Tag removed!')}>
      Tag
    </Tag>
  </div>
  <div className="dib">
    <Tag style="danger" onRemove={() => console.log('Tag removed!')}>
      Tag
    </Tag>
  </div>
  <div className="dib">
    <Tag style="warning" onRemove={() => console.log('Tag removed!')}>
      Tag
    </Tag>
  </div>
  <div className="dib">
    <Tag style="success" onRemove={() => console.log('Tag removed!')}>
      Tag
    </Tag>
  </div>
</div>
```
