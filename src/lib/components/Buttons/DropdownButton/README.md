```js
const approvePayment = () => console.log('Payment Approved!')
const cancelOrder = () => console.log('Order Cancelled!')

const Dropdown = [
  {
    label: 'Approve Payment',
    callback: () => approvePayment()
  },
  {
    label: 'Cancel Order',
    callback: () => cancelOrder()
  }
];

<div>
  <div className="mb2">
    <DropdownButton options={Dropdown}>
      <Button type="primary" fullWidth>
        Change order status
        <IconAngle side="down" className="ml2" />
      </Button>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton options={Dropdown} isOpened>
      <Button type="primary" fullWidth>
        Dropdown menu that is already open!
        <IconAngle side="down" className="ml2" />
      </Button>
    </DropdownButton>
  </div>
</div>
```