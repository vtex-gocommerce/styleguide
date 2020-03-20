import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from '../../components/Form/Select'
import Pagination from '../../components/Navigation/Pagination'
import { injectIntl, intlShape, defineMessages } from 'react-intl'

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

class TablePagination extends PureComponent {
  handleChangePerPage = e => this.props.handleChangePerPage(e.target.value)
  formatMessage = id => this.props.intl.formatMessage({ id }, {})

  render() {
    const { total, page, perPage, handleChangePage, recordsLabel } = this.props

    const viewPageOptions = [
      { label: this.props.intl.formatMessage(messages.view15), value: 15 },
      { label: this.props.intl.formatMessage(messages.view50), value: 50 },
      { label: this.props.intl.formatMessage(messages.view100), value: 100 },
    ]

    return (
      <div className="flex justify-between items-center c-on-base-2">
        {total} {recordsLabel || 'records'}
        <div className="flex overflow-hidden justify-end">
          <div className="pointer">
            <Select
              elementClassName="tracked-tight zeitungMicroPro pointer hover-c-primary"
              list={viewPageOptions}
              required
              placeholder={false}
              value={perPage}
              onChange={this.handleChangePerPage}
              withoutStyle
            />
          </div>

          <div className="flex items-center ml5 justify-end relative z-3">
            <Pagination
              currentPage={page}
              pageCount={Math.ceil(total / perPage || 1)}
              onPageChange={handleChangePage}
            />
          </div>
        </div>
      </div>
    )
  }
}

TablePagination.propTypes = {
  /** Total of itens of all pages */
  total: PropTypes.number,
  /** Current page. */
  page: PropTypes.number,
  /** How many elements should be shown per page */
  perPage: PropTypes.number,
  /** Func called when a perPage change event is trigged */
  handleChangePerPage: PropTypes.Funciton,
  /** Func called when a page change event is trigged */
  handleChangePage: PropTypes.Funciton,
  /** Records Label */
  recordsLabel: PropTypes.string,
  intl: intlShape,
}

export default injectIntl(TablePagination)
