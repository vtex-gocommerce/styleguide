import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'

class NumberCard extends Component {
  render() {
    const { title, icon, value } = this.props
    const Icon = props => icon

    return (
      <Card title={title}>
        <div className="flex items-center h-100">
          <span className="flex items-center justify-center br-100 h-large w2 bg-primary white">
            <Icon width="48px" heigth="48px" />
          </span>
          <span className="ml4 c-primary f3 fw6 tracked-tight">{value}</span>
        </div>
      </Card>
    )
  }
}

NumberCard.propTypes = {
  /** Title of the card. */
  title: PropTypes.string.isRequired,
  /** Icon that will be showed. */
  icon: PropTypes.element.isRequired,
  /** Make input disabled. */
  value: PropTypes.string.isRequired
}

export default NumberCard
