import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paginate from 'react-paginate'
import IconArrowLeft from '../../../icons/IconArrowLeft'
import IconArrowRight from '../../../icons/IconArrowRight'
import styles from './style.css'

class Pagination extends PureComponent {
  handleChange = page => {
    const { pageCount } = this.props
    page = page < 1 ? 1 : page > pageCount ? pageCount : page
    this.props.onPageChange(page)
  }

  render() {
    const { currentPage, pageCount } = this.props

    return (
      <div className="flex gray items-center">
        <div className="dib mr5 tracked-tight">
          <span className="c-primary">{currentPage}</span> / <span>{pageCount}</span>
        </div>

        <span
          className="db w1 mr2"
          onClick={() => {
            if (currentPage > 1) this.handleChange(currentPage - 1)
          }}
        >
          <IconArrowLeft className={`${currentPage > 1 ? 'gray hover-c-primary pointer' : 'c-base-4'}`} />
        </span>
        <span
          className="db"
          onClick={() => {
            if (currentPage < pageCount) this.handleChange(currentPage + 1)
          }}
        >
          <IconArrowRight
            className={`${currentPage < pageCount ? 'gray hover-c-primary pointer ' : 'c-base-4'}`}
          />
        </span>
      </div>
    )
  }
}

Pagination.propTypes = {
  /** Define selected page. */
  currentPage: PropTypes.number.isRequired,
  /** Define total count of pages. */
  pageCount: PropTypes.number.isRequired,
  /** Function to run when page is changed. */
  onPageChange: PropTypes.func
}

Pagination.defaultProps = {
  onPageChange: () => {},
  isCompact: false
}

export default Pagination
