import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconSpinner from '../../../icons/IconSpinner'
import PlaceholderContainer from './../../General/PlaceholderContainer'

class Card extends Component {
  render() {
    const { title, isLoading } = this.props

    const classes = 'flex flex-column w-100 h-100 ba b--navy-40 bg-white'

    return (
      <div className={classes}>
        <h3 className="flex items-center g-h11 bb b--navy-40 g-ma0 g-ph3 g-f2 fw5 bg-navy-20 navy">{title}</h3>
        <PlaceholderContainer
          classNameArray={[
            'w-30 g-h6 g-ml4 g-mt5 br3',
            'w-60 g-h4 g-ml4 g-mt6 br2',
            'w-70 g-h4 g-ml4 g-mt3 br2',
            'w-40 g-h4 g-ml4 g-mt3 br2 g-mb5'
          ]}
          isPlaceholderActive={this.props.isLoading}
        >
          {() => <div className={`g-pa4 flex flex-column flex-auto ${styles.cardContent}`}>{this.props.children}</div>}
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
