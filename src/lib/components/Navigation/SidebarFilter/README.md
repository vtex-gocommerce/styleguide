```js
class ContainerSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showSidebar: false,
      enabledOptionsSidebar: [
        { title: 'This week', value: '08/06/2018|08/06/2014', code: 'date-This week' },
        {
          code: 'tag-Tag 1',
          title: 'Tag 1',
          value: 'tag1'
        }
      ],
      configSidebar: [
        {
          code: 'by-date-created',
          title: 'By date created',
          expanded: true,
          optionsType: 'date',
          options: [
            {
              title: 'Today',
              value: '09/06/2018'
            },
            {
              title: 'Yesterday',
              value: '08/06/2018'
            },
            {
              title: 'This week',
              value: '08/06/2018|08/06/2014'
            }
          ]
        },
        {
          code: 'by-marketing-preferences',
          title: 'By marketing preferences',
          expanded: true,
          optionsType: 'toggle',
          options: [{ title: 'Email subscribers', value: true }]
        },
        {
          code: 'by-tag',
          title: 'By tag',
          expanded: false,
          optionsType: 'checkbox',
          options: [
            { title: 'Tag 1', value: 'tag1' },
            { title: 'Tag 2', value: 'tag2' },
            { title: 'Tag 3', value: 'tag3' },
            { title: 'Tag 4', value: 'tag4' },
            { title: 'Tag 5', value: 'tag5' },
            { title: 'Tag 6', value: 'tag6' }
          ]
        },
        {
          code: 'by-marketing-preferences',
          title: 'By new users',
          expanded: true,
          optionsType: 'radio',
          options: [{ title: 'Yes', value: true }, { title: 'No', value: false }]
        }
      ]
    }
  }

  handleToggleSidebarFilterOptions(configSidebar) {
    this.setState({ configSidebar })
  }

  handleOpenSidebar() {
    this.setState({ showSidebar: true })
  }

  handleCloseSidebar() {
    this.setState({ showSidebar: false })
  }

  handleChangeEnabledOptionsSidebar(filters) {
    this.setState({ enabledOptionsSidebar: filters })
  }

  render() {
    const { showSidebar } = this.state

    return (
      <div>
        <Button onClick={this.handleOpenSidebar.bind(this)}> Open Sidebar filter </Button>
        <div className={showSidebar ? 'db' : 'dn'}>
          <SidebarFilter
            handleClose={this.handleCloseSidebar.bind(this)}
            handleToggleFilterOption={this.handleToggleSidebarFilterOptions.bind(this)}
            handleChange={this.handleChangeEnabledOptionsSidebar.bind(this)}
            config={this.state.configSidebar}
            enabledOptions={this.state.enabledOptionsSidebar}
          />
        </div>
      </div>
    )
  }
}
;<div>
  <ContainerSidebar />
</div>
```
