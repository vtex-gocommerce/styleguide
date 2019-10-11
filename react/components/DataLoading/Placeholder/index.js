import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Placeholder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: !props.isPlaceholderActive,
      loading: false,
    }
  }

  render() {
    const { ready, loading } = this.state
    if (!ready && !loading) return <div className={`animated-background ${this.props.className}`} />
    if (!ready && loading) {
      return (
        <div className={`${this.props.className}`}>
          <div className="fadeOut">
            <div className="animated-background" />
          </div>
        </div>
      )
    }
    if (ready && !loading) return <div className="fadeIn">{this.props.children()}</div>

    return <span />
  }
}
//
Placeholder.propTypes = {
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** Show place holde */
  isPlaceholderActive: PropTypes.bool,
  /** Component Shown after the placeholde fades */
  children: PropTypes.func,
}

export default Placeholder
