Plain text input

```js
<Input />
```

Input with placeholder

```js
<Input htmlProps={{ placeholder: 'Look this placeholder...' }} />
```

Input with error

```js
<Input htmlProps={{ value: 'This is so wrong' }} hasError />
```

Input that is password

```js
<Input htmlProps={{ type: 'password', value: 'topsecret' }} />
```

Disabled input

```js
<Input htmlProps={{ value: 'Disabled' }} isDisabled />
```