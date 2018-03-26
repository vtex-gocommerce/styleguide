```js { "props": { "style": {"backgroundColor": "#EFF1F9"} } } 
<Timeline>
    <TimelineHistory
        datetime='13/03/2018 - 16:55:24'
        status="warning"
        icon={<IconWarning spin ignoreSize />}
    >
        <Card title="Antifraud Brand Name"><p className="yellow fw6">Antifraud risk scored 8!</p></Card>
    </TimelineHistory>
    <TimelineHistory
        datetime='13/03/2018 - 16:59:24'
        status="info"
        icon={<IconSync spin ignoreSize />}
    >
        <div className="dib ba br2 b--navy-40 pa4 bg-white navy">Processing...</div>
    </TimelineHistory>
    <TimelineHistory
        datetime='13/03/2018 - 17:05:34'
        status="success"
        icon={<IconCheck ignoreSize />}
    >
        <div className="dib ba br2 b--green pa4 bg-green white">Order accepted!</div>
    </TimelineHistory>
</Timeline>
```