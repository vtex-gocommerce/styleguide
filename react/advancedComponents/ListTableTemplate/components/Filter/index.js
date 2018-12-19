import React, { PureComponent } from 'react'
import Search from './../../../../components/Form/Search'
import Badge from './../../../../components/Indicators/Badge'
import IconFilter from './../../../../icons/IconFilter'
import PropTypes from 'prop-types'
import { ListTableTemplateConsumer } from './../../index'

class Filter extends PureComponent {
  render() {
    const { isLoading } = this.props

    return (
      <ListTableTemplateConsumer>
        {({ searchText, handleSearch, handleOpenSidebarFilter, disableSidebar, enabledSidebarFilterOptions }) => {
          return (
            <div className="flex justify-between">
              <div className="w-auto w-third-ns">
                <Search
                  placeholder={false}
                  onClick={handleSearch}
                  searchValue={searchText}
                  placeholder={this.props.placeholder}
                  className="f6"
                  isLoading={isLoading && (enabledSidebarFilterOptions.length > 0 || searchText !== '')}
                />
              </div>
              <div className="dn db-ns w-third-ns g-mh8" />
              <div className="pointer self-center w-auto w-third-ns">
                {!disableSidebar && (
                  <span className="fr dib">
                    {enabledSidebarFilterOptions.length === 0 ? (
                      <span
                        className="db"
                        onClick={() => {
                          handleOpenSidebarFilter()
                        }}
                      >
                        <IconFilter className="c-on-base-2 hover-c-primary" width="25px" height="19px" />
                      </span>
                    ) : (
                      <Badge
                        onClick={() => {
                          handleOpenSidebarFilter()
                        }}
                        text={`${enabledSidebarFilterOptions.length}`}
                        icon={<IconFilter className="c-on-base-2 hover-c-primary" />}
                      />
                    )}
                  </span>
                )}
              </div>
            </div>
          )
        }}
      </ListTableTemplateConsumer>
    )
  }
}

Filter.propTypes = {
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string
}

export default Filter
