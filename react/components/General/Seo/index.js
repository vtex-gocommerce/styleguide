import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Seo extends Component {
  render() {
    const { className, title, url, description, noBorder } = this.props
    const border = noBorder ? '' : 'ba br2 b--light-gray'
    return (
      <div className={`pl5 pt4 ${border} ${styles.gc_seo} ${className}`}>
        <div>
          <span className={styles.gc_seo_button__close} />
          <span className={styles.gc_seo_button__maximize} />
          <span className={styles.gc_seo_button__minimize} />
        </div>
        <div className="pt5 ">
          {title && <span className={`db f4 pb1 word-break ${styles.gc_seo__title}`}>{title}</span>}
          {url && <span className={`db f6 pb1 word-break ${styles.gc_seo__url}`}>{url}</span>}
          {description && (
            <span className={`db pt1 f6 fw3 word-break ${styles.gc_seo__description}`}>{description}</span>
          )}
        </div>
      </div>
    )
  }
}

Seo.propTypes = {
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** Remove border style from the container. */
  noBorder: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string
}

Seo.defaultProps = {
  className: ''
}

export default Seo
