import React, { PureComponent, createContext } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import Filter from './components/Filter'
import Pagination from './components/Pagination'
import Table from './components/Table'
import SidebarFilter from './../../components/Navigation/SidebarFilter'

import {
  objectToQueryString,
  parseIntervalCollection,
  parseSortCollection,
  getSidebarFilterByOptionCode,
  parseActiveSidebarFilterOptions,
  parseFilterCollection
} from './utils/functions'

const ListTableTemplateContext = createContext()
export const ListTableTemplateConsumer = ListTableTemplateContext.Consumer

const defaultPage = 1
const defaultPerPage = 15
const defaultSort = null

const defaultToQueryStringConfig = [
  { field: 'activeTab' },
  { field: 'searchText', nameInUrl: 'q' },
  { field: 'page', nameInUrl: 'page' },
  { field: 'perPage', nameInUrl: 'perPage' },
  {
    field: 'sort',
    nameInUrl: 'sort',
    format: sort => `${sort.field}|${sort.direction}`
  }
]

class ListTableTemplate extends PureComponent {
  static Filter = Filter
  static Table = Table
  static Pagination = Pagination
  static Consumer = ListTableTemplateConsumer

  componentDidMount() {
    const urlData = {
      page: this.props.pageUrl,
      query: objectToQueryString(this.getObjectToQuery(), [
        ...defaultToQueryStringConfig,
        ...this.props.toQueryStringConfig
      ])
    }
    localStorage.setItem('filterBack', JSON.stringify(urlData))
  }

  formatMessage = id => this.props.intl.formatMessage({ id }, {})

  refecthData = () => {
    if (this.props.forceRefetchData) {
      const interval = parseIntervalCollection(this.state.page, this.state.perPage)
      const sort = this.state.sort
      const search = this.state.searchText
      const filters = parseFilterCollection(this.state.enabledSidebarFilterOptions, this.state.sidebarFilterConfig)

      this.props.refecthData(interval, sort, search, filters)
    }
  }

  getObjectToQuery = () => {
    let filtersQuery = this.state.enabledSidebarFilterOptions.reduce((prev, option) => {
      const filterConfig = getSidebarFilterByOptionCode(option.code, this.state.sidebarFilterConfig)

      if (!!filterConfig.multi) {
        return {
          ...prev,
          [filterConfig.nameInUrl]: prev[filterConfig.nameInUrl]
            ? option.value + ',' + prev[filterConfig.nameInUrl]
            : option.value
        }
      }

      return { ...prev, [filterConfig.nameInUrl]: option.value }
    }, {})

    return { ...this.state, ...filtersQuery }
  }

  changeUrl = () => {
    const urlData = {
      page: this.props.pageUrl,
      query: objectToQueryString(this.getObjectToQuery(), [
        ...defaultToQueryStringConfig,
        ...this.props.toQueryStringConfig
      ])
    }
    localStorage.setItem('filterBack', JSON.stringify(urlData))
    this.props.navigate(urlData)
  }

  setStateAndRefetchData = newState => {
    this.setState(
      prevState => ({ ...prevState, ...newState }),
      () => {
        this.refecthData()
        this.changeUrl()
      }
    )
  }

  handleChangePage = nextPage => {
    this.setStateAndRefetchData({ page: nextPage })
  }

  handleChangePerPage = perPage => {
    this.setStateAndRefetchData({ page: defaultPage, perPage: parseInt(perPage) })
  }

  handleChangeOrderBy = sort => {
    this.setStateAndRefetchData({ sort })
  }

  handleSearch = value => {
    this.setStateAndRefetchData({ searchText: value.searchValue })
  }

  handleChangeTab = tabId => {
    const tab = this.props.tabsConfig.find(tab => tab.id === tabId)

    this.setStateAndRefetchData({
      searchText: '',
      showFilter: false,
      activeTab: tabId,
      sort: defaultSort,
      page: 1,
      enabledSidebarFilterOptions: parseActiveSidebarFilterOptions(tab.query, this.state.sidebarFilterConfig)
    })
  }

  handleChangeEnabledSidebarFilterOptions = filters => {
    this.setStateAndRefetchData({ enabledSidebarFilterOptions: filters, page: 1 })
  }

  handleOpenSidebarFilter = () => {
    this.setState({ showFilter: true })
  }

  handleCloseSidebarFilter = () => {
    this.setState({ showFilter: false })
  }

  handleToggleSidebarFilterExpanded = sidebarFilterConfig => {
    this.setState({ sidebarFilterConfig })
  }

  state = {
    showFilter: false,
    page: parseInt(this.props.query.page || defaultPage),
    perPage: parseInt(this.props.query.perPage || defaultPerPage),
    sort: parseSortCollection(this.props.query.sort) || this.props.sortDefault,
    searchText: this.props.query.q || '',
    activeTab: this.props.query.activeTab ? this.props.query.activeTab : 'default',
    enabledSidebarFilterOptions: parseActiveSidebarFilterOptions(
      this.props.query || [],
      this.props.sidebarFilterConfig || []
    ),
    sidebarFilterConfig: this.props.sidebarFilterConfig,
    disableSidebar: this.props.sidebarFilterConfig.length === 0,
    intl: this.props.intl,
    handleChangePage: this.handleChangePage,
    handleChangePerPage: this.handleChangePerPage,
    handleChangeOrderBy: this.handleChangeOrderBy,
    handleSearch: this.handleSearch,
    handleChangeTab: this.handleChangeTab,
    handleOpenSidebarFilter: this.handleOpenSidebarFilter
  }

  render() {
    const sidebarFilterLocale = {
      filters: <FormattedMessage id="admin/styleguide.sidebarfilter.filters" defaultMessage='Filters' />,
      applyFilter: <FormattedMessage id="admin/styleguide.sidebarfilter.apply-filter" defaultMessage='Apply filters' />,
      editFilters: <FormattedMessage id="admin/styleguide.sidebarfilter.edit-filters" defaultMessage='Edit filters' />,
      appliedFilters: <FormattedMessage id="admin/styleguide.sidebarfilter.applied-filters" defaultMessage='Applied filters' />,
      filtersConfig: {
        date: {
          dateRange: <FormattedMessage id="admin/sidebar.date-range" defaultMessage='Date range' />,
          from: <FormattedMessage id="admin/sidebar.from" defaultMessage='From' />,
          to: <FormattedMessage id="admin/sidebar.to" defaultMessage='To' />
        }
      }
    }
    const { children } = this.props
    return (
      <ListTableTemplateContext.Provider value={this.state}>
        {' '}
        <div className={this.state.showFilter ? 'db' : 'dn'}>
          <SidebarFilter
            handleClose={this.handleCloseSidebarFilter}
            config={this.state.sidebarFilterConfig}
            handleToggleFilterOption={this.handleToggleSidebarFilterExpanded}
            handleChange={this.handleChangeEnabledSidebarFilterOptions}
            enabledOptions={this.state.enabledSidebarFilterOptions}
            localeConfig={sidebarFilterLocale}
            locale={this.props.intl.locale}
          />
        </div>
        {children}
      </ListTableTemplateContext.Provider>
    )
  }
}

ListTableTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  forceRefetchData: PropTypes.bool,
  query: PropTypes.object,
  pageUrl: PropTypes.string,
  toQueryStringConfig: PropTypes.array,
  sidebarFilterConfig: PropTypes.array,
  tabsConfig: PropTypes.array,
  navigate: PropTypes.func,
  refecthData: PropTypes.func,
  intl: PropTypes.any
}

ListTableTemplate.defaultProps = {
  query: {},
  tabsConfig: [],
  toQueryStringConfig: [],
  sidebarFilterConfig: [],
  navigate: data => console.log('------Navigate-------', data),
  refecthData: () => {}
}

export default injectIntl(ListTableTemplate)
