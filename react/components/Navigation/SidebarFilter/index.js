import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCloseAlt from '../../../icons/IconCloseAlt'
import IconCaret from '../../../icons/IconCaret'
import Tag from '../../Indicators/Tag'
import Button from '../../Buttons/Button'
import SidebarFilterDate from '../SidebarFilterDate'
import SidebarFilterCheckbox from '../SidebarFilterCheckbox'
import SidebarFilterToggle from '../SidebarFilterToggle'
import SidebarFilterRadio from '../SidebarFilterRadio'

const defaultLocale = {
  filters: 'Filters',
  applyFilter: 'Apply Filter',
  editFilters: 'Edit Filters',
  appliedFilters: 'Applied Filters',
  filtersConfig: {
    date: {
      dateRange: 'Date range',
      from: 'From',
      to: 'To'
    },
    checkbox: {},
    toggle: {},
    radio: {}
  }
}

const optionsTypeComponents = {
  date: SidebarFilterDate,
  checkbox: SidebarFilterCheckbox,
  toggle: SidebarFilterToggle,
  radio: SidebarFilterRadio
}

class SidebarFilter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { swapFilter: this.enabledOptionsToSwapFilter(), keyRenderOptions: 0 }
  }

  enabledOptionsToSwapFilter = () => {
    let swapFilter = {}
    this.props.enabledOptions.forEach(element => {
      if (!swapFilter.hasOwnProperty(this.getCodeFilter(element.code)))
        swapFilter[this.getCodeFilter(element.code)] = []

      swapFilter[this.getCodeFilter(element.code)] = [...swapFilter[this.getCodeFilter(element.code)], element]
    })

    return swapFilter
  }

  getTextByLocale = key => {
    return this.props.localeConfig.hasOwnProperty(key) ? this.props.localeConfig[key] : defaultLocale[key]
  }

  getCodeFilter = code => {
    return code.split('-')[0]
  }

  handleRemove = option => {
    const code = this.getCodeFilter(option.code)
    const newActiveFilters = this.props.enabledOptions.filter(element => element.code !== option.code)

    this.setState({ swapFilter: { ...this.state.handleChangeSwapFilter, [code]: newActiveFilters } }, () => {
      this.props.handleChange(newActiveFilters)
      this.handleClose()
    })
  }

  handleChangeSwapFilter = option => {
    this.setState({ swapFilter: { ...this.state.swapFilter, ...option } })
  }

  handleToggleFilterOption = code => {
    const newConfig = this.props.config.map(filter => {
      if (filter.code === code) {
        return { ...filter, expanded: !filter.expanded }
      }

      return filter
    })
    this.props.handleToggleFilterOption(newConfig)
  }

  handleAppyFilter = () => {
    this.props.handleChange([].concat(...Object.values(this.state.swapFilter)))
    this.handleClose()
  }

  handleClose = () => {
    this.setState({ keyRenderOptions: this.state.keyRenderOptions + 1 })
    this.props.handleClose()
  }

  render() {
    const enabledOptions = this.props.enabledOptions
    const { keyRenderOptions } = this.state
    return (
      <div className="fixed z-9999 w-25 vh-100 top-0 right-0 shadow-2 bg-white">
        <div className="flex flex-column vh-100 g-ph8 g-pt6 g-pb0 ">
          <div className="flex justify-between  g-pb5">
            <div className="g-f5 fw6 tracked-tight c-on-base">{this.getTextByLocale('filters')}</div>
            <div className="g-f2">
              <div
                className="fr g-ph3 c-on-base pointer hover-c-danger"
                onClick={() => {
                  this.handleClose()
                }}
              >
                <IconCloseAlt height="25px" width="25px" />
              </div>
            </div>
          </div>
          <div className="flex-auto overflow-y-scroll">
            {enabledOptions &&
              enabledOptions.length > 0 && (
                <div className="w-100">
                  <p className="c-on-base-2 g-f1 fw6">{this.getTextByLocale('appliedFilters')}</p>
                  <div className="flex flex-wrap g-pt2">
                    {enabledOptions.map((item, index) => {
                      return (
                        <span key={item.code} className="dib g-mb2">
                          <Tag className="g-h10 " onRemove={() => this.handleRemove(item)}>
                            {item.title}
                          </Tag>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}

            <div className="w-100">
              <div className="g-pt2">
                <p className="c-on-base-2 g-f1 fw6 nb2">{this.getTextByLocale('editFilters')} </p>
              </div>
            </div>

            {this.props.config.map((filter, index) => {
              const ComponentListOptions = optionsTypeComponents[filter.optionsType]

              return (
                <div key={`${keyRenderOptions}${filter.code}`} className="g-pv4 bb b--base-4">
                  <div
                    className="flex outiline c-on-base hover-c-primary pointer"
                    onClick={() => {
                      this.handleToggleFilterOption(filter.code)
                    }}
                  >
                    <div className="flex-auto">
                      <div className="flex fw6 g-f3 c-primary ">{filter.title}</div>
                    </div>
                    <div className="fr flex">
                      <IconCaret side={filter.expanded ? 'up' : 'down'} className="g-pt1 g-ph3 c-primary" />
                    </div>
                  </div>
                  <div className={filter.expanded ? 'db g-pt0' : 'dn'}>
                    <ComponentListOptions
                      filter={filter}
                      enabledOptions={enabledOptions}
                      handleChange={this.handleChangeSwapFilter}
                      locale={this.props.locale}
                      localeConfig={
                        this.props.localeConfig.filtersConfig &&
                        this.props.localeConfig.filtersConfig[filter.optionsType]
                          ? this.props.localeConfig.filtersConfig[filter.optionsType]
                          : defaultLocale.filtersConfig[filter.optionsType]
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="w-100 g-pv5">
            <Button onClick={this.handleAppyFilter} className="w-100">
              {this.getTextByLocale('applyFilter')}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

SidebarFilter.propTypes = {
  localeConfig: PropTypes.object,
  locale: PropTypes.string,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      expanded: PropTypes.boolean,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.string.isRequired,
          title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
          value: PropTypes.any.isRequired
        })
      ),
      optionsType: PropTypes.oneOf(['date', 'checkbox', 'toggle', 'radio'])
    })
  ).isRequired,
  enabledOptions: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  handleClose: PropTypes.func,
  handleChange: PropTypes.func,
  handleToggleFilterOption: PropTypes.func
}

SidebarFilter.defaultProps = {
  localeConfig: {},
  locale: 'en-US',
  enabledOptions: []
}

export default SidebarFilter

// SidebarFilter.propTypes = {
//   /** List of tab labels. */
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   /** Set initial tab value. */
//   initialTab: PropTypes.string.isRequired,
//   /** Callback when clicking a tab. */
//   onClick: PropTypes.func.isRequired,
//   /** Append css classes to the tab. */
//   className: PropTypes.string,
//   /** force a new active tab */
//   forceValue: PropTypes.string
// }
