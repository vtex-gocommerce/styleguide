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
  <Button disabled>Disabled</Button>
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
  <Button style="danger" icon={<IconTimes />} className="g-mr2" />
  <Button className="g-mr2" icon={<IconSpinner animate />} disabled />
  <Button className="g-mr2" icon={<IconMore className="g-mr2" />}>
    Add Product
  </Button>
</div>
```

Button with action

```js
<Button onClick={() => console.log('Clicked!')}>Click me!</Button>
```
