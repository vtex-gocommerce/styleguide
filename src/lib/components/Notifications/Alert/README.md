```js
<div>
  <div className="g-mb2">
    <Alert title="Info">
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Attention" type="warning" onClose={() => console.log('Closed!')}>
      This action is irreversible!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Fail" type="error" onClose={() => console.log('Closed!')}>
      You can't delete this item.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Congratulations" type="success" onClose={() => console.log('Closed!')}>
      Your action was complete!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Info" autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')}>
      This alert will timeout after 3s. Check console log.
    </Alert>
  </div>
</div>
```

Without title

```js
<div>
  <div className="g-mb2">
    <Alert type="warning" onClose={() => console.log('Closed!')}>
      This action is irreversible!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert type="error" onClose={() => console.log('Closed!')}>
      You can't delete this item.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert type="success" onClose={() => console.log('Closed!')}>
      Your action was complete!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')}>
      This alert will timeout after 3s. Check console log.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert>Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.</Alert>
  </div>
</div>
```

With background

```js
<div>
  <div className="g-mb2">
    <Alert title="Info" fill>
      Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Attention" type="warning" onClose={() => console.log('Closed!')} fill>
      This action is irreversible!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Fail" type="error" onClose={() => console.log('Closed!')} fill>
      You can't delete this item.
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Congratulations" type="success" onClose={() => console.log('Closed!')} fill>
      Your action was complete!
    </Alert>
  </div>
  <div className="g-mb2">
    <Alert title="Info" autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')} fill>
      This alert will timeout after 3s. Check console log.
    </Alert>
  </div>
</div>
```

With Action

```js
<div>
  <div className="g-mb2">
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
