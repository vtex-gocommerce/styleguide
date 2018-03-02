Simple select

```js
const Items = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
];
<Select placeholder="Select a fruit..." list={Items} />
```

Select with some disable options

```js
const Items = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
  {label: 'Orange', value: 'orange', disabled: true},
];
<Select list={Items} />
```

Select with a **obviously** error

```js
const Items = [
  {label: 'Left', value: 'left'},
  {label: 'Right', value: 'right'},
];
<Select placeholder="Choose a political wing..." list={Items} hasError />
```

Disabled select

```js
const Items = [
  {label: 'Dog', value: 'dog'},
  {label: 'Cat', value: 'cat'},
];
<Select placeholder="Don't choose anything!" list={Items} isDisabled />
```

