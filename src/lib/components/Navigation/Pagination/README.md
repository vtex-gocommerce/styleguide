```js
<div>
    <div className="flex justify-center mb5">
        <Pagination initialPage={1} pageCount={600} onPageChange={(data) => console.log('Page changed!')} />
    </div>
    <div className="flex justify-center">
        <Pagination initialPage={15} pageCount={30} isCompact />
    </div>
</div>
```