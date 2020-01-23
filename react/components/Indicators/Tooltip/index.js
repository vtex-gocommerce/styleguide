import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Tooltip extends Component {
  state = {
    show: false
  }
  render() {
    return (
      <>
        <div className="dib mr2 relative">
          <div
            className={`gc_tooltip z-5 absolute br2 g-pa2 bg-base-inverted-1 g-f1 c-white tc
            ${styles.gc_tooltip} ${this.props.className} ${this.state.show ? '' : 'dn'}`}
            style={{ width: this.props.width }}
          >
            {this.props.label}
          </div>
          <div
            onMouseEnter={() => this.setState({ show: true })}
            onMouseLeave={() => this.setState({ show: false })}
          >
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}

Tooltip.propTypes = {
  width: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

Tooltip.defaultProps = {
  width: '200px',
  className: ''
}

export default Tooltip
