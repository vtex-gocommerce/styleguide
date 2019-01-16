```js
<div>
  <div className="g-mb2">
    <DateTimePicker label="Label of input" />
    <span className="g-ml4 no-underline c-on-base-1">With Label</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker />
    <span className="g-ml4 no-underline c-on-base-1">Plain DateTimePicker</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker placeholder="Look this placeholder..." />
    <span className="g-ml4 no-underline c-on-base-1">DateTimePicker with placeholder</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker value="This is so wrong" hasError />
    <span className="g-ml4 no-underline c-on-base-1">DateTimePicker with error</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker type="text" value="" suffix="begins" />
    <span className="g-ml4 no-underline c-on-base-1">Suffix</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker value="Disabled" disabled />
    <span className="g-ml4 no-underline c-on-base-1">Disabled</span>
  </div>
  <div className="g-mb2">
    <DateTimePicker iconBefore={<IconCalendarAlt className="c-base-4" />} />
    <span className="g-ml4 no-underline c-on-base-1">Icon Prefix</span>
  </div>
</div>
```
