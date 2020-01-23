import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const Tooltip = ({ className = '', children, text }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="dib mr2 relative">
      <div
        className={`gc_tooltip z-5 absolute br2 g-pa2 bg-base-inverted-1 g-f1 c-white tc
          ${styles.gc_tooltip} ${className} ${show ? '' : 'dn'}`
        }
        style={{ width: '200px' }}
      >
        <span>{text}</span>
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Tooltip
