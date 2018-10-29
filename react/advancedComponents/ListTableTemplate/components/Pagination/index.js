import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Select from './../../../../components/Form/Select'
import { default as PaginationStyleguide } from './../../../../components/Navigation/Pagination'

import { ListTableTemplateConsumer } from './../../index'

class Pagination extends PureComponent {
  viewPageOptions = intl => {
    return [
      { label: intl.formatMessage({ id: 'admin.oms.view-1' }), value: 1 },
      { label: intl.formatMessage({ id: 'admin.oms.view-15' }), value: 15 },
      { label: intl.formatMessage({ id: 'admin.oms.view-50' }), value: 50 },
      { label: intl.formatMessage({ id: 'admin.oms.view-100' }), value: 100 }
    ]
  }

  render() {
    const { total } = this.props

    return (
      <ListTableTemplateConsumer>
        {context => {
          console.log('------PaginationContext-------', context)

          const { page, perPage, handleChangePerPage, handleChangePage, intl } = context

          return (
            <div className="flex justify-between items-center c-on-base-2 g-f2">
              <span>
                <FormattedMessage id="admin.oms.showing" /> {total} <FormattedMessage id="admin.oms.records" />
              </span>
              <div className="flex justify-end flex-auto">
                <div className="pointer justify-end ">
                  <Select
                    elementClassName="tracked-tight pointer hover-c-primary"
                    list={this.viewPageOptions(intl)}
                    required
                    placeholder={false}
                    value={perPage}
                    onChange={e => handleChangePerPage(e.target.value)}
                    withoutStyle
                  />
                </div>

                <div className="flex items-center g-ml3 justify-end relative z-3 g-w14">
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
  total: PropTypes.number
}

Pagination.defaultProps = {
  total: 0
}

export default Pagination
