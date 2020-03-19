```js
<div>
  <div className="mb2">
    <Alert title="Info">
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </Alert>
  </div>
  <div className="mb2">
    <Alert title="Attention" type="warning" onClose={() => console.log('Closed!')}>
      This action is irreversible!
    </Alert>
  </div>
  <div className="mb2">
    <Alert type="error" onClose={() => console.log('Closed!')}>
      You can't delete this item.
    </Alert>
  </div>
  <div className="mb2">
    <Alert title="Congratulations" type="success" onClose={() => console.log('Closed!')} fill>
      Your action was complete!
    </Alert>
  </div>
  <div className="mb2">
    <Alert
      title="Info"
      action={
        <Button size="large" style="outline">
          Action
        </Button>
      }
    >
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </Alert>
  </div>
</div>
```
