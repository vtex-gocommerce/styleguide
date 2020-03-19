import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, defineMessages } from 'react-intl'

import Select from './../../../../components/Form/Select'
import { default as PaginationStyleguide } from './../../../../components/Navigation/Pagination'

import { ListTableTemplateConsumer } from './../../index'

const messages = defineMessages({
  view1: {
    id: 'admin/styleguide.tablePagination.view-1',
    defaultMessage: 'View 1',
  },
  view15: {
    id: 'admin/styleguide.tablePagination.view-15',
    defaultMessage: 'View 15',
  },
  view50: {
    id: 'admin/styleguide.tablePagination.view-50',
    defaultMessage: 'View 50',
  },
  view100: {
    id: 'admin/styleguide.tablePagination.view-100',
    defaultMessage: 'View 100',
  },
})

class Pagination extends PureComponent {
  viewPageOptions = intl => {
    return [
      { label: intl.formatMessage(messages.view1), value: 1 },
      { label: intl.formatMessage(messages.view15), value: 15 },
      { label: intl.formatMessage(messages.view50), value: 50 },
      { label: intl.formatMessage(messages.view100), value: 100 },
    ]
  }

  render() {
    const { total } = this.props

    return (
      <ListTableTemplateConsumer>
        {context => {
          const { page, perPage, handleChangePerPage, handleChangePage, intl } = context

          const showingItens = total <= perPage ? total : perPage

          return (
            <div className="flex justify-between items-center c-on-base-2 f6">
              <span className="dn db-ns">
                <FormattedMessage
                  id="admin/styleguide.tablePagination.showing"
                  values={{ perPage: showingItens, total: total }}
                />
              </span>
              <div className="flex justify-between justify-end-ns flex-auto">
                <div className="pointer justify-end nl4 nl0-ns">
                  <Select
                    elementClassName="tracked-tight pointer hover-c-primary"
                    className="pl0 pl4-ns"
                    list={this.viewPageOptions(intl)}
                    required
                    placeholder={false}
                    value={perPage}
                    onChange={e => handleChangePerPage(e.target.value)}
                    withoutStyle
                  />
                </div>

                <div className="flex items-center ml3 justify-end relative z-3 w4">
                  <PaginationStyleguide
                    currentPage={page || 1}
                    pageCount={Math.ceil(total / perPage || 1)}
                    onPageChange={handleChangePage}
                  />
                </div>
              </div>
            </div>
          )
        }}
      </ListTableTemplateConsumer>
    )
  }
}

Pagination.propTypes = {
  total: PropTypes.number,
}

Pagination.defaultProps = {
  total: 0,
}

export default Pagination
