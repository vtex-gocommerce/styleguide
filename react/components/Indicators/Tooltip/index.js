import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const Tooltip = ({ className = '', children, text }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="dib mr2 relative">
      <div className={`absolute ${styles.gc_tooltip_container}`} style={{ width: '250px' }}>
        <div
          className={`z-5 br2 pa2 bg-serious-black f7 c-white tc
            ${styles.gc_tooltip} ${className} ${show ? '' : 'dn'}`
          }
          style={{ width: 'fit-content' }}
        >
          <span>{text}</span>
        </div>
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
