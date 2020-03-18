import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconArrowLeft from '../../../icons/IconArrowLeft'

class Breadcrumb extends PureComponent {
  renderItemLink = (item, icon = false) => {
    const classesLink = 'c-on-base-2 no-underline hover-c-primary'

    if (!this.props.link) {
      return (
        <a href={item.to} className={classesLink}>
          {icon && <IconArrowLeft className="mr2" />}
          <span className="dn dib-ns">{item.title}</span>
        </a>
      )
    }

    const Link = this.props.link

    let query = ''
    if (window.localStorage !== undefined) {
      const filterBack = JSON.parse(localStorage.getItem('filterBack'))
      if (filterBack && `/${filterBack.page}` === item.to) {
        query = filterBack.query
      }
    }

    return (
      <Link to={item.to} page={item.page} query={query} className={classesLink}>
        {icon && <IconArrowLeft className="mr2" />}
        <span className="dn dib-ns">{item.title}</span>
      </Link>
    )
  }

  renderItemText = item => {
    return item.title
  }

  renderItem = (item, index) => {
    return (
      <React.Fragment key={item.title}>
        {item.hasOwnProperty('to') || item.hasOwnProperty('page') ? (
          this.renderItemLink(item, index === 0)
        ) : (
          <span className="c-on-base-2 dib">{this.renderItemText(item)}</span>
        )}
        <span className="c-on-base-2 ph2 dib">{this.props.separator}</span>
      </React.Fragment>
    )
  }

  render() {
    const { items } = this.props

    return (
      <div className="c-on-base f5 f5-ns fw6 tracked-tight flex items-center overflow-hidden flex-auto pr11-ns">
        {items.map((item, index, items) => {
          if (index + 1 === items.length) {
            return (
              <span key={index} className="truncate">
                {this.renderItemText(item, index)}
              </span>
            )
          }
          return this.renderItem(item, index)
        })}
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  /** List of items. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      page: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ).isRequired,
  /** Separator character */
  separator: PropTypes.string,
  /** Link Component */
  link: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
}

Breadcrumb.defaultProps = {
  separator: '/',
  link: null,
}

export default Breadcrumb
