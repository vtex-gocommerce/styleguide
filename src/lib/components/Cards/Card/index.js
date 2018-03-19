import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const { title, value } = this.props

    const classes = 'w-100 h-100 ba b--navy-40 bg-white'

    return (
      <div className={classes}>
        <h3 className="bb b--navy-40 ma0 pa4 f2 fw5 bg-navy-20 navy">{title}</h3>
        <div className="pa4">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  /** Title of the card. */
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Card
