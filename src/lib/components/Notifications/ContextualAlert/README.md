```js
<div>
  <div className="g-mb2">
    <ContextualAlert>
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="warning" onClose={() => console.log('Closed!')}>
      This action is irreversible!
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="error" onClose={() => console.log('Closed!')}>
      You can't delete this item.
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="success" onClose={() => console.log('Closed!')}>
      Your action was complete! 
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')}>
      This alert will timeout after 3s. Check console log.
    </ContextualAlert>
  </div>
</div>
```

Alerts with background

```js
<div>
  <div className="g-mb2">
    <ContextualAlert fill>
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="warning" onClose={() => console.log('Closed!')} fill>
      This action is irreversible!
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="error" onClose={() => console.log('Closed!')} fill>
      You can't delete this item.
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert type="success" onClose={() => console.log('Closed!')} fill>
      Your action was complete!
    </ContextualAlert>
  </div>
  <div className="g-mb2">
    <ContextualAlert autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')} fill>
      This alert will timeout after 3s. Check console log.
    </ContextualAlert>
  </div>
</div>
```
