import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NumberCard extends Component {
  render() {
    const { title, icon, value } = this.props
    const Icon = (props) => (icon)

    const classes = 'ba b--navy-40 bg-white'

    return (
      <div className={classes}>
        <h3 className="bb b--navy-40 ma0 pa4 f2 fw5 bg-navy-20 navy">{title}</h3>
        <div className="flex items-center ph5 pv7">
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
  icon: PropTypes.element.isRequired,
  /** Make input disabled. */
  value: PropTypes.string.isRequired,
}

export default NumberCard
