import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Placeholder extends PureComponent {
  render() {
    return (
      <div>
        {this.props.isPlaceholderActive ? (
          <div className={`animated-background ${this.props.className}`} />
        ) : (
          <div>
            <div className={`fadeOut ${this.props.className}`}>
              <div className={`animated-background ${this.props.className}`} />
            </div>
            <div className="fadeIn">{this.props.children()}</div>
          </div>
        )}
      </div>
    )
  }
}
//
Placeholder.propTypes = {
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** Show place holde */
  isPlaceholderActive: PropTypes.bool,
  /** Component Shown after the placeholde fades */
  children: PropTypes.node
}

export default Placeholder
