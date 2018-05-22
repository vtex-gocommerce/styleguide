```js
<div className="flex">
  <div className="w-third g-mr2">
    <Card title="Customer Data">
      <p className="flex-auto g-ma0 g-f4 blue">Steven Johnson</p>

      <div className="w-100">
        <Button fullWidth style="outline">
          <IconVisibility className="g-mr2" isVisible />
          Customer Details
        </Button>
      </div>
    </Card>
  </div>
  <div className="w-third g-mr2">
    <Card title="Customer Data">
      <p className="ma0 g-f4 blue">Steven Johnson</p>
      <ul className="flex-auto list g-pl0">
        <li className="navy g-mb3">St. Fourth</li>
        <li className="navy g-mb3">Nowhere Land - IDK</li>
        <li className="navy">Phone: (21) 99999-9999</li>
      </ul>
    </Card>
  </div>
  <div className="w-third">
    <Card title="Total Value" isLoading>
      <p className="mt0 g-f4 blue">R$ 332,34</p>
      <ul className="list g-pl0">
        <li className="flex justify-between navy g-mb3">
          <span>Total Items</span>
          <span>R$ 332,73</span>
        </li>
        <li className="flex justify-between navy g-mb3">
          <span>Discount</span>
          <span>R$ 1,50</span>
        </li>
        <li className="flex justify-between navy g-mb3">
          <span>Shipping</span>
          <span>Free</span>
        </li>
        <li className="flex justify-between navy">
          <span>Total</span>
          <span>R$ 331,23</span>
        </li>
      </ul>
    </Card>
  </div>
</div>
```
