#### Accepted props:

| prop name | type    | default | required |
|-----------|---------|---------|----------|
| text      | string  |         | No       |
| htmlFor   | string  |         | No       |
| hasError  | boolean | false   | No       |
| required  | boolean | false   | No       |
| className | string  |         | No       |

#### Usage

```js
<InputLabel
  text="Name"
  htmlFor="name"
  hasError={false}
  required={true}
/>
```