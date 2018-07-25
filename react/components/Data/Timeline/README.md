```js { "props": { "style": {"backgroundColor": "#FFFFFF"} } }
<Timeline>
  <TimelineStep datetime="13/03/2018 - 16:55:24" bgColor="warning" icon={<IconWarning spin ignoreSize />}>
    <Card title="Antifraud Brand Name">
      <p className="yellow fw6">Antifraud risk scored 8!</p>
    </Card>
  </TimelineStep>
  <TimelineStep datetime="13/03/2018 - 16:59:24" bgColor="info" icon={<IconSync spin ignoreSize />}>
    <div className="dib ba br2 b--navy-40 g-pa4 bg-white navy">Processing...</div>
  </TimelineStep>
  <TimelineStep datetime="13/03/2018 - 17:05:34" bgColor="success" icon={<IconCheck ignoreSize />}>
    <div className="dib ba br2 b--success g-pa4 bg-success white">Order accepted!</div>
  </TimelineStep>
</Timeline>
```
