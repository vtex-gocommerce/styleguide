import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconArrow from '../../../icons/IconArrow'

class Breadcrumb extends PureComponent {
  renderItemLink = (item, icon = false) => {
    const classesLink = 'c-on-base-2 no-underline hover-c-primary'

    if (!this.props.link)
      return (
        <a href={item.to} className={classesLink}>
          {icon && <IconArrow side="left" className="g-mr2" />} {item.title}
        </a>
      )

    const Link = this.props.link

    let query = ''
    if (window.localStorage !== undefined) {
      const filterBack = JSON.parse(localStorage.getItem('filterBack'))
      if (filterBack && `/${filterBack.page}` == item.to) {
        query = filterBack.query
      }
    }

    return (
      <Link to={item.to} query={query} className={classesLink}>
        {icon && <IconArrow side="left" className="g-mr2" />} {item.title}
      </Link>
    )
  }

  renderItemText = item => {
    return item.title
  }

  renderItem = (item, index) => {
    return (
      <React.Fragment key={item.title}>
        {item.hasOwnProperty('to') ? (
          this.renderItemLink(item, index === 0)
        ) : (
          <span className="c-on-base-2">{this.renderItemText(item)}</span>
        )}
        <span className="c-on-base-2"> {this.props.separator} </span>
      </React.Fragment>
    )
  }

  render() {
    const { items } = this.props

    return (
      <div className="c-on-base g-f5 fw6 lh-copy tracked-tight">
        {items.map((item, index, items) => {
          if (index + 1 === items.length) {
            return <span key={index}>{this.renderItemText(item, index)}</span>
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
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    })
  ).isRequired,
  /** Separator character */
  separator: PropTypes.string,
  /** Link Component */
  link: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

Breadcrumb.defaultProps = {
  separator: '/',
  link: null
}

export default Breadcrumb
