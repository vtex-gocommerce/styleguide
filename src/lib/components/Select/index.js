import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Select extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue,
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
  }

  render() {
    const { name, placeholder, list, isDisabled, hasError } = this.props
    const { value } = this.state

    let classes = 'pa3 ba br1 '
    if (isDisabled) classes += 'b--navy-40 bg-navy-20 navy-80 '
    if (hasError) classes += 'b--red bg-red-light red '
    if (!isDisabled && !hasError) classes += 'b--navy-40 hover-b--navy-60 bg-white navy '
    if (this.props.className) classes += this.props.className

    return (
      <span className={styles.selectWrapper}>
        <select name={name} className={classes} disabled={isDisabled} onChange={this.handleChange} value={value}>
          <option value="" disabled hidden>{placeholder}</option>
          {list.map((item, index) => {
            return <option key={item.value} value={item.value} disabled={item.disabled}>{item.label}</option>
          })}
        </select>
      </span>
    )
  }
}

Select.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** Option to be shown as placeholder. */
  placeholder: PropTypes.string,
  /** List of options to populate select. */
  list: PropTypes.array.isRequired,
  /** Visually change input to show error. */
  hasError: PropTypes.bool,
  /** Make input disabled. */
  isDisabled: PropTypes.bool,
  /** Receive a key from the list to be the default value. */
  defaultValue: PropTypes.string,
  /** Append css classes to the Input. */
  className: PropTypes.string,
}

Select.defaultProps = {
  placeholder: 'Select...',
  hasError: false,
  isDisabled: false,
  defaultValue: '',
  className: '',
}

export default Select
