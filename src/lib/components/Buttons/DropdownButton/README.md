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
  <DropdownButton options={Dropdown}>
    <Button type="primary">
      Change order status
      <IconAngle side="down" className="ml2" />
    </Button>
  </DropdownButton>
</div>
```