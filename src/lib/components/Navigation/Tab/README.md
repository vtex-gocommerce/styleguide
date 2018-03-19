```js
const list = [
    {
        'id': 'home',
        'label': 'Home',
    },
    {
        'id': 'products',
        'label': 'Products',
    },
    {
        'id': 'orders',
        'label': 'Orders',
    }
];
<div>
    <Tab list={list} initialTab='home' onClick={ (value) => setTimeout(() => alert(`Changed to ${value}`), 200)} />
    <Tab className="ph12" list={list} initialTab='home' onClick={ (value) => setTimeout(() => alert(`Changed to ${value}`), 200)} />
</div>
```