```js

Link = (props) =>{ return  <span className={`underline ` + props.className}>{props.children}</span> }

const items = [
    {
        title: "Orders",
        to: "/admin/oms/orders"
    },
    {
        title: "#897321354564-02"
    }
];

const item = [
    {
        title: "Orders"
    }
];




<div>
  <div className="g-mb4">
    <Breadcrumb separator="/" items={items}/>
  </div>

  <div className="g-mb4">
    <hr />
    Unique item
    <Breadcrumb separator="/" items={item}/> 
  </div>

  <div className="g-mb4">
    <hr />
    with custom link
    <Breadcrumb separator="/" items={items} link={Link}/> 
  </div>
</div>
```