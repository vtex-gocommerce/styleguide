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
          <span className="flex items-center br-100 g-pa4 bg-primary white g-f5">
            <Icon />
          </span>
          <span className="g-ml4 c-primary g-f7">{value}</span>
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
