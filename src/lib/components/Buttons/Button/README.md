```js
<div>
  <Button className="g-mr2" style="primary">
    Primary
  </Button>
  <Button className="g-mr2" style="secondary">
    Secondary
  </Button>
  <Button className="g-mr2" style="danger">
    Danger
  </Button>
  <Button className="g-mr2" style="outline">
    Outline
  </Button>
  <Button isDisabled>Disabled</Button>
</div>
```

Button Full Width

```js
<div>
  <Button className="g-mt2" fullWidth>
    Full Width
  </Button>
</div>
```

Icon Buttons

```js
<div>
  <Button style="danger" icon={<IconClose />} className="g-mr2" />
  <Button className="g-mr2" icon={<IconSpinner pulse />} isDisabled />
  <Button className="g-mr2" icon={<IconAdd className="g-mr2" />}>
    Add Product
  </Button>
</div>
```

Button with action

```js
<Button onClick={() => console.log('Clicked!')}>Click me!</Button>
```
