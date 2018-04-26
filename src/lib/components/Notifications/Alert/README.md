```js
<div>
  <div className="mb2">
    <Alert>Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.</Alert>
  </div>
  <div className="mb2">
    <Alert type="warning" onClose={() => console.log('Closed!')}>
      This action is irreversible!
    </Alert>
  </div>
  <div className="mb2">
    <Alert type="error" onClose={() => console.log('Closed!')}>
      You can't delete this item.
    </Alert>
  </div>
  <div className="mb2">
    <Alert type="success" onClose={() => console.log('Closed!')}>
      Your action was complete!
    </Alert>
  </div>
  <div>
    <Alert autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')}>
      This alert will timeout after 3s. Check console log.
    </Alert>
  </div>
</div>
```
