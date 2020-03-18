import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import PlaceholderContainer from '../../DataLoading/PlaceholderContainer'

class Card extends Component {
  render() {
    const { title, isLoading } = this.props

    const classes = 'flex flex-column w-100 h-100 ba b--base-4 bg-white br1'

    return (
      <div className={classes}>
        {title && <h3 className="flex items-center pt4 b--base-1 ma0 ph4 f7 fw6 c-on-base">{title}</h3>}
        <PlaceholderContainer
          classNameArray={[
            "w-30 h6 ml4 mt5 br3",
            "w-60 h4 ml4 mt6 br2",
            "w-70 h4 ml4 mt3 br2",
            "w-40 h4 ml4 mt3 br2 mb5",
          ]}
          isPlaceholderActive={isLoading}
        >
          {() => (
            <div className={`pv4 ph4 flex flex-column flex-auto ${styles.cardContent}`}>{this.props.children}</div>
          )}
        </PlaceholderContainer>
      </div>
    )
  }
}

Card.propTypes = {
  /** Title of the card. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Display a card with placeholders. */
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card
