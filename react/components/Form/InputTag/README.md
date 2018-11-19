```js
<div>
  <div className="g-mb2">
    <InputTag
      className="w-100"
      allowDuplicate={false}
      onDuplicateItem={valueDuplicate => console.log('Duplicate: ', valueDuplicate)}
      onChangeValues={values => console.log(values)}
      onChangeInput={input => console.log(input)}
    />
  </div>
  <div className="g-mb2">
    <InputTag
      className="w-100"
      tagStyle="primary"
      defaultValues={['tag', 'tag2', 'tag3']}
      onChangeValues={values => console.log(values)}
      onChangeInput={input => console.log(input)}
    />
  </div>
</div>
```
