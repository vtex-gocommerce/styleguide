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
      hasError={true}
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
  <div className="g-mb2">
    <InputTag
      className="w-100"
      autocomplete={true}
      tagStyle="primary"
      defaultValues={['tag', 'tag2', 'tag3']}
      onChangeValues={values => console.log(values)}
      onChangeInput={input => console.log(input)}
      source={[
        { id: '1', label: 'Banana' },
        { id: '2', label: 'Maçã' },
        { id: '3', label: 'Uva' },
        { id: '4', label: 'Laranja' },
        { id: '5', label: 'Kiwi' },
        { id: '6', label: 'Manga' },
        { id: '7', label: 'Morango' },
        { id: '8', label: 'Mamão' },
        { id: '9', label: 'Limão' }
      ]}
    />
  </div>
</div>
```
