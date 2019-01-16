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
  <div className="g-mb2">
    <DropdownButton options={Dropdown}>
      <Button style="primary" fullWidth>
        Change order status
        <IconArrowDown className="g-ml2" />
      </Button>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton options={Dropdown} isOpened>
      <Button style="primary" fullWidth>
        Dropdown menu that is already open!
        <IconArrowDown className="g-ml2" />
      </Button>
    </DropdownButton>
  </div>
</div>
```
