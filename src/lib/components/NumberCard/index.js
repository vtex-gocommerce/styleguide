import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NumberCard extends Component {
  render() {
    const { title, icon, value } = this.props
    const Icon = (props) => (icon)

    let classes = 'br2 bg-white pa9'

    return (
      <div className={classes}>
        <h3 className="ma0 fw4 navy">{title}</h3>
        <div className="flex items-center mt4">
          <span className="flex items-center br-100 pa4 bg-blue white f5">
            <Icon />
          </span>
          <span className="ml4 blue f7">
            {value}
          </span>
        </div>
      </div>
    )
  }
}

NumberCard.propTypes = {
  /** Title of the card. */
  title: PropTypes.string.isRequired,
  /** Icon that will be showed. */
  icon: PropTypes.element,
  /** Make input disabled. */
  value: PropTypes.string.isRequired
}

NumberCard.defaultProps = {
  title: '',
  value: ''
}

export default NumberCard