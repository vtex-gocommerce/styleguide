Info

```js
<Alert>Congrats! Your recovery code was printed and the app authenticator was sucessfully validated.</Alert>
```

Warning

```js
<Alert type="warning" onClose={() => console.log('Closed!')}>
  This action is irreversible!
</Alert>
```

Error

```js
<Alert type="error" onClose={() => console.log('Closed!')}>
  You can't delete this item.
</Alert>
```

Success

```js
<Alert type="success" onClose={() => console.log('Closed!')}>
  Your action was complete!
</Alert>
```

Auto Close

```js
<Alert autoClose={3000} onClose={() => console.log('Auto closed after 3000ms!')}>
  This alert will timeout after 3s. Check console log.
</Alert>
```
