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

Button Full Width

```js
<div>
  <Button className="mt2" fullWidth>Full Width</Button>
</div>
```

Icon Buttons

```js
<div>
  <Button style="danger" icon={<IconClose />} className="mr2" />
  <Button className="mr2" icon={<IconSpinner pulse />} isDisabled />
  <Button className="mr2" icon={<IconAdd className="mr2" />}>
    Add Product
  </Button>
</div>
```

Button with action

```js
<Button onClick={() => console.log('Clicked!')}>Click me!</Button>
```