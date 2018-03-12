Primary (Default)

```js
<Button style="primary">Primary</Button>
```

Secondary

```js
<Button style="secondary">Secondary</Button>
```

Danger

```js
<Button style="danger">Danger</Button>
```

Outline

```js
<Button style="outline">Outline</Button>
```

Disabled

```js
<Button isDisabled>Disabled</Button>
```

Button with action

```js
<Button onClick={() => console.log('Clicked!')}>Click me!</Button>
```

Button styles

```js
<div>
  <Button className="mr2" style="primary">
    Primary
  </Button>
  <Button className="mr2" style="secondary">
    Secondary
  </Button>
  <Button className="mr2" style="danger">
    Danger
  </Button>
  <Button className="mr2" style="outline">
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
  <Button style="danger" className="mr2">
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