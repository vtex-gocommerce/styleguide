import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Breadcrumb extends PureComponent {

  renderItemLink = (item, icon = false) => {
    const classesLink = "c-on-base-2 inline-flex items-center no-underline hover-c-primary"

    if (!this.props.link)
      return <React.Fragment>
        <a href={item.to} className={classesLink}>{icon && <IconArrow side="left" className="g-mr2" />} {item.title}</a>
      </React.Fragment>

    const Link = this.props.link
    return <React.Fragment>
      <Link to={item.to} className={classesLink}>{icon && <IconArrow side="left" className="g-mr2" />} {item.title}</Link>
    </React.Fragment>
  }

  renderItemText = (item) => {
    return item.title
  }

  renderItem = (item, index) => {
    return (<React.Fragment>
      {item.hasOwnProperty('to') ? this.renderItemLink(item, index === 0) : this.renderItemText(item)}
      <span className="c-on-base-2"> {this.props.separator}</span>
    </React.Fragment>)
  }


  render() {
    const { items } = this.props

    return (
      <div className="c-on-base g-f5 fw5">
        {items.map((item, index, items) => {
          if (index + 1 === items.length) {
            return this.renderItemText(item, index)
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
      title: PropTypes.string.isRequired,
      to: PropTypes.string
    })
  ).isRequired,
  /** Separator character */
  separator: PropTypes.string,
  /** Link Conponent */
  link: PropTypes.element
}

Breadcrumb.defaultProps = {
  separator: '/',
  link: null
}

export default Breadcrumb
