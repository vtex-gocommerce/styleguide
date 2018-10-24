import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from '../../components/Form/Select'
import Pagination from '../../components/Navigation/Pagination'
import { injectIntl } from 'react-intl'

class TableListTemplate extends PureComponent {
  handleChangePerPage = e => this.props.handleChangePerPage(e.target.value)
  formatMessage = id => this.props.intl.formatMessage({ id }, {})

  render() {
    const { total, page, perPage, handleChangePage, recordsLabel } = this.props

    const viewPageOptions = [
      { label: this.formatMessage('advancedComponents.tablePagination.view-15'), value: 15 },
      { label: this.formatMessage('advancedComponents.tablePagination.view-50'), value: 50 },
      { label: this.formatMessage('advancedComponents.tablePagination.view-100'), value: 100 }
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

          <div className="flex items-center g-ml5 justify-end relative z-3">
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

TableListTemplate.propTypes = {
  /** Total of itens of all pages */
  total: PropTypes.number,
  /** Current page. */
  page: PropTypes.number,
  /** How many elements should be shown per page */
  perPage: PropTypes.string,
  /** Func called when a perPage change event is trigged */
  handleChangePerPage: PropTypes.Funciton,
  /** Func called when a page change event is trigged */
  handleChangePage: PropTypes.Funciton,
  /** Records Label */
  recordsLabel: PropTypes.string
}

export default injectIntl(TableListTemplate)
