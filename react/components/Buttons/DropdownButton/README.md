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
]
;<div>
  <div className="mb2">
    <DropdownButton options={Dropdown}>
      <Button style="primary" fullWidth>
        Change order status
        <IconArrowDown className="ml2" />
      </Button>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton options={Dropdown} isOpened>
      <Button style="primary" fullWidth>
        Dropdown menu that is already open!
        <IconArrowDown className="ml2" />
      </Button>
    </DropdownButton>
  </div>
</div>
```
