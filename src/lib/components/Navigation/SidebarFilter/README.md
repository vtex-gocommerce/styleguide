```js
class ContainerSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showSidebar: true,
      enabledOptionsSidebar: [
        { title: 'This week', value: '08/06/2018|08/06/2014', code: 'by-date-created-today' },
        {
          code: 'by-tag-tag-1',
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
              code: 'today',
              title: 'Today',
              value: '09/06/2018'
            },
            {
              code: 'yesterday',
              title: 'Yesterday',
              value: '08/06/2018'
            },
            {
              code: 'this-week',
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
          options: [{ code: 'email-subscribers', title: 'Email subscribers', value: true }]
        },
        {
          code: 'by-tag',
          title: 'By tag',
          expanded: false,
          optionsType: 'checkbox',
          options: [
            { code: 'tag-1', title: 'Tag 1', value: 'tag1' },
            { code: 'tag-2', title: 'Tag 2', value: 'tag2' },
            { code: 'tag-3', title: 'Tag 3', value: 'tag3' },
            { code: 'tag-4', title: 'Tag 4', value: 'tag4' },
            { code: 'tag-5', title: 'Tag 5', value: 'tag5' },
            { code: 'tag-6', title: 'Tag 6', value: 'tag6' }
          ]
        },
        {
          code: 'by-new-users',
          title: 'By new users',
          expanded: true,
          optionsType: 'radio',
          options: [{ code: 'yes', title: 'Yes', value: true }, { code: 'no', title: 'No', value: false }]
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
