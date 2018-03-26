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
        <h3 className="flex items-center bb b--navy-40 ma0 h11 ph3 f2 fw5 bg-navy-20 navy">{title}</h3>
        {
          isLoading ? (
            <div className={`flex flex-grow-1 items-center justify-center pa4 ${styles.cardContent}`}>
              <IconSpinner width="32" height="32" pulse />
            </div>
          ) : (
              <div className={`pa4 ${styles.cardContent}`}>
                {this.props.children}
              </div>
            )
        }
      </div>
    )
  }
}

Card.propTypes = {
  /** Title of the card. */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  /** Display a loading spinner. */
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card
