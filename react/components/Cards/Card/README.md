```js
<div className="flex">
  <div className="w-third mr2">
    <Card title="Customer Data">
      <p className="flex-auto ma0 f4 c-primary">Steven Johnson</p>

      <div className="w-100">
        <Button fullWidth style="outline">
          <IconEye className="mr2" />
          Customer Details
        </Button>
      </div>
    </Card>
  </div>
  <div className="w-third mr2">
    <Card title="Customer Data">
      <p className="ma0 f4 c-primary">Steven Johnson</p>
      <ul className="flex-auto list pl0">
        <li className="c-on-base-2 mb3">St. Fourth</li>
        <li className="c-on-base-2 mb3">Nowhere Land - IDK</li>
        <li className="c-on-base-2">Phone: (21) 99999-9999</li>
      </ul>
    </Card>
  </div>
  <div className="w-third">
    <Card title="Total Value" isLoading>
      <p className="mt0 f4 c-primary">R$ 332,34</p>
      <ul className="list pl0">
        <li className="flex justify-between c-on-base-2 mb3">
          <span>Total Items</span>
          <span>R$ 332,73</span>
        </li>
        <li className="flex justify-between c-on-base-2 mb3">
          <span>Discount</span>
          <span>R$ 1,50</span>
        </li>
        <li className="flex justify-between c-on-base-2 mb3">
          <span>Shipping</span>
          <span>Free</span>
        </li>
        <li className="flex justify-between c-on-base-2">
          <span>Total</span>
          <span>R$ 331,23</span>
        </li>
      </ul>
    </Card>
  </div>
</div>
```
