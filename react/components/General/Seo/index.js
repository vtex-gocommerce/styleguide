import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Seo extends Component {
  render() {
    const { className, title, url, description } = this.props
    return (
      <div className={`ba br2 b--base-3 g-pa4 ${styles.gc_seo} ${className}`}>
        <div>
          <span className={styles.gc_seo_button__close} />
          <span className={styles.gc_seo_button__maximize} />
          <span className={styles.gc_seo_button__minimize} />
        </div>
        <div className="g-pa4 ">
          {title && <span className={`db g-f4 g-pb1 ${styles.gc_seo__title}`}>{title}</span>}
          {url && <span className={`db g-f2 g-pb1 ${styles.gc_seo__url}`}>{url}</span>}
          {description && <span className={`db g-f2 ${styles.gc_seo__description}`}>{description}</span>}
        </div>
      </div>
    )
  }
}

Seo.propTypes = {
  /** Append css classes to the Input. */
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes
}

Seo.defaultProps = {
  className: ''
}

export default Seo
