Primary (Default)

```js
<Button type="primary">Primary</Button>
```

Secondary

```js
<Button type="secondary">Secondary</Button>
```

Danger

```js
<Button type="danger">Danger</Button>
```

Outline

```js
<Button type="outline">Outline</Button>
```

Disabled

```js
<Button isDisabled>Disabled</Button>
```

Button with action

```js
<Button onClick={() => console.log('Clicked!')}>Click me!</Button>
```

Button Types

```js
<div>
  <Button className="mr2" type="primary">
    Primary
  </Button>
  <Button className="mr2" type="secondary">
    Secondary
  </Button>
  <Button className="mr2" type="danger">
    Danger
  </Button>
  <Button className="mr2" type="outline">
    Outline
  </Button>
  <Button isDisabled>Disabled</Button>
</div>
```

Button Sizes

```js
<div>
  <Button className="mr2" size="small">
    Small
  </Button>
  <Button className="mr2" size="normal">
    Normal
  </Button>
  <Button size="large">Large</Button>
</div>
```

Icon Buttons

```js
<div>
  <Button type="danger" className="mr2">
    <IconClose />
  </Button>
  <Button className="mr2" isDisabled>
    <IconSpinner pulse />
  </Button>
  <Button className="mr2">
    <IconAdd className="mr2" /> Add Product
  </Button>
</div>
```