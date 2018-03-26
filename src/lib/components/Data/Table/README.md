```js
const columns = [
    {
        id: 'Name',
        label: 'Name',
    },
    {
        id: 'Address',
        label: 'Address',
    },
    {
        id: 'Price',
        label: <IconMoney />,
        isCentered: true,
        size: 15
    },
    {
        id: 'Count',
        label: 'Count',
        size: 10
    },
    {
        id: 'Active',
        label: 'Active',
    },
    {
        id: 'Actions',
        label: '',
        size: 7,
        isCentered: true
    }
];

const rows = [
    {
        id: 1,
        Name: 'Example Test',
        Address: 'Street of Test',
        Count: 245,
        Price: <div><span className="navy-60 strike">$ 2399.00</span><br />$ 2199.90</div>,
        Active: <Toggle value="isActive" isChecked />,
        Actions: <IconMore className="blue" width="20" height="20" />
    },
    {
        Active: <Toggle value="isActive" isDisabled />,
        Name: 'Too big example test name, just to see what will happen',
        Address: 'Street of Test',
        id: 2,
        Count: 2454,
        Hidden: 'Property',
        Actions: <IconMore className="blue" width="20" height="20" />
    },
    {
        id: 3,
        Name: 'Last Test',
        Address: 'Just a big street, also to see what will happen',
        Count: <p className="yellow">24 <IconWarning className="ml1" family="regular" /></p>,
        Active: <Toggle value="isActive" />,
        Actions: <IconMore className="blue" width="20" height="20" />
    }
];

<div>
    <div className="mb4">
        <Table columns={columns} rows={rows} />
    </div>
    <div>
        <Table columns={columns} rows={rows} selectable onChange={(e) => console.log(e)} />
    </div>
</div>
```