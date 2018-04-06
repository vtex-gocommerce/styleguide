import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconSpinner from '../../../icons/IconSpinner'

class Card extends Component {
  render() {
    const { title, isLoading } = this.props

    const classes = 'flex flex-column w-100 h-100 ba b--navy-40 bg-white'

    return (
      <div className={classes}>
        <h3 className="bb b--navy-40 ma0 pv4 ph3 f2 fw5 bg-navy-20 navy">{title}</h3>
        <PlaceholderContainer
          classNameArray={['w-30 h6 ml4 mt5 br3', 'w-60 h4 ml4 mt6 br2', 'w-70 h4 ml4 mt3 br2', 'w-40 h4 ml4 mt3 br2']}
          isPlaceholderActive={this.props.isLoading}
        >
          <div className={`pa4 flex flex-column flex-auto ${styles.cardContent}`}>{this.props.children}</div>
        </PlaceholderContainer>
      </div>
    )
  }
}

Card.propTypes = {
  /** Title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Display a card with placeholders. */
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Card
