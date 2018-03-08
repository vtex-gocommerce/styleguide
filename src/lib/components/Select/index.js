import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
  }

  render() {
    const { placeholder, list, isDisabled, hasError } = this.props
    const { selectedOption } = this.state
    const value = selectedOption && selectedOption.value

    let classes = 'pa3 ba br1 '

    if (isDisabled || hasError) {
      if (isDisabled) {
        classes += 'b--navy-40 bg-navy-20 navy-80 '
      }

      if (hasError) {
        classes += 'b--red bg-red-light red '
      }
    } else {
      classes += 'b--navy-40 hover-b--navy-60 bg-white navy '
    }

    if (this.props.className) {
      classes += this.props.className
    }

    return (
      <span className={styles.selectWrapper}>
        <select className={classes} disabled={isDisabled} onChange={this.handleChange}>
          <option value="" selected disabled hidden>{placeholder}</option>
          {list.map((el, index) => {
            return <option key={el.value} value={el.value} disabled={el.disabled}>{el.label}</option>
          })}
        </select>
      </span>
    )
  }
}

Select.propTypes = {
  /** Placeholder string. */
  placeholder: PropTypes.string,
  /** Item list to be showed on select. */
  list: PropTypes.array.isRequired,
  /** Visually change input to present error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  isDisabled: PropTypes.bool,
  /** Append css classes to the Input. */
  className: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Select...',
  className: '',
}

export default Select