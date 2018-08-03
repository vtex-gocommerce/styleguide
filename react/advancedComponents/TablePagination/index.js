import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from '../../components/Form/Select'
import Pagination from '../../components/Navigation/Pagination'
import { FormattedMessage } from 'react-intl'

class TablePagination extends PureComponent {
  handleChangePerPage = e => this.props.handleChangePerPage(e.target.value)

  render() {
    const { total, page, perPage, handleChangePage, recordsLabel } = this.props

    const viewPageOptions = [
      { label: 1, value: 1 },
      { label: 15, value: 15 },
      { label: 50, value: 50 },
      { label: 100, value: 100 }
    ]
    return (
      <div className="flex justify-between items-center c-on-base-2">
        {total} {recordsLabel || 'records'}
        <div className="flex overflow-hidden justify-end">
          <div className="pointer">
            <Select
              className="g-w14"
              list={viewPageOptions}
              required
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

TablePagination.propTypes = {
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

export default TablePagination
