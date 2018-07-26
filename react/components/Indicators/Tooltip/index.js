import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Tooltip extends Component {
  render() {
    return (
      <div
        className={`gc_tooltip z-5 absolute br2 g-pa4 bg-base-inverted-1 c-white ${styles.gc_tooltip}`}
        style={{ width: this.props.width }}
      >
        {this.props.children}
      </div>
    )
  }
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.node.isRequired
}

Tooltip.Tooltip = {
  show: false,
  width: 'auto'
}

export default Tooltip
