export function objectToQueryString(source, config) {
  const fields = config.filter(item => !!source[item.field]).map(item => {
    const queryName = encodeURIComponent(item.nameInUrl ? item.nameInUrl : item.field)
    const queryValue = encodeURIComponent(item.format ? item.format(source[item.field]) : source[item.field])
    return `${queryName}=${queryValue || item.default}`
  })

  return fields.join('&')
}

export function parseIntervalCollection(page, perPage) {
  return {
    init: (page - 1) * perPage,
    end: page * perPage
  }
}

export function parseSortCollection(sort) {
  if (!sort) {
    return null
  }
  const sortValues = sort.split('|')
  return { field: sortValues[0], direction: sortValues[1] }
}

export function parseSortString(sort) {
  if (!sort) {
    return ''
  }
  const sortValues = sort.split('|')

  return sortValues.join(' ')
}

export function parseActiveSidebarFilterOptions(query, sidebarFilterConfig) {
  let filters = sidebarFilterConfig.reduce((prev, element) => {
    if (!query.hasOwnProperty(element.nameInUrl)) return [...prev]

    let option = element.queryStringToEnabledOption(query[element.nameInUrl], element.options)

    return [...prev, ...option]
  }, [])

  return filters
}

export function getSidebarFilterByOptionCode(optionCode, sidebarFilterConfig = []) {
  return sidebarFilterConfig.find(filter => filter.code === optionCode.split('-')[0])
}

export function parseFilterCollection(enabledSidebarFilterOptions = [], sidebarFilterConfig = []) {
  const filters = sidebarFilterConfig.reduce((collectionFilters, filter) => {
    return [
      ...collectionFilters,
      ...filter.optionToFilterCollection(
        enabledSidebarFilterOptions.filter(option => option.code.indexOf(filter.code + '-') !== -1)
      )
    ]
  }, [])

  return filters
}
