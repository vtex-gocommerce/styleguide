import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'

class NumberCard extends Component {
  render() {
    const { title, icon, value } = this.props
    const Icon = (props) => (icon)

    return (
      <Card title={title}>
        <div className="flex items-center ph4 pv6">
          <span className="flex items-center br-100 pa4 bg-blue white f5">
            <Icon />
          </span>
          <span className="ml4 blue f7">
            {value}
          </span>
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
  value: PropTypes.string.isRequired,
}

export default NumberCard
