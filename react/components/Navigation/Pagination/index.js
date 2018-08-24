import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paginate from 'react-paginate'
import IconArrow from '../../../icons/IconArrow'
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
      <div className="flex c-on-base-2 items-center">
        <div className="dib g-mr5 tracked-tight">
          <span className="c-primary">{currentPage}</span> / <span>{pageCount}</span>
        </div>
        {currentPage > 1 && (
          <span className="db g-w5 g-mr2" onClick={() => this.handleChange(currentPage - 1)}>
            <IconArrow side="left" className="c-on-base-2 hover-c-primary pointer" />
          </span>
        )}
        {currentPage < pageCount && (
          <span className="db" onClick={() => this.handleChange(currentPage + 1)}>
            <IconArrow side="right" className="c-on-base-2 hover-c-primary pointer" />
          </span>
        )}
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
