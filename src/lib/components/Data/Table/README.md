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
        Name: 'Teste',
        Address: 'Rua Teste',
        Count: 245,
        Price: <div><span className="navy-60 strike">R$ 2.399,00</span><br />R$ 2.199,90</div>,
        Active: <Toggle value="isActive" isChecked />,
        Actions: <IconMore className="blue" width="20" height="20" />
    },
    {
        Active: <Toggle value="isActive" isDisabled />,
        Name: 'Teste com nome grande demais para ver o que acontece',
        Address: 'Rua Teste',
        id: 2,
        Count: 2454,
        Lala: 'Land',
        Actions: <IconMore className="blue" width="20" height="20" />
    },
    {
        id: 3,
        Name: 'Teste',
        Address: 'Rua Teste grande demais para ver o que acontece',
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