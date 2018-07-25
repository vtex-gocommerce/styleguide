import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import './reactSelect.global.css'
import './component.global.css'

class SearchSelect extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.defaultValue
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) this.setState({ value: nextProps.value })
  }

  handleChange = event => {
    const value = event
    this.setState({ value })
    this.props.onChange && this.props.onChange(value)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { name, placeholder, list, isDisabled, hasError, required } = this.props
    const { value } = this.state

    let classes = 'g-pa3 ba br1 '
    if (isDisabled) classes += 'b--navy-40 bg-navy-20 navy-80 '
    if (hasError) classes += 'b--red bg-red-light red '
    if (!isDisabled && !hasError) classes += 'b--navy-40 hover-b--navy-60 bg-white navy '
    classes += this.props.elementClassName

    return (
      <div className={`${this.props.className}`}>
        <Select
          name={name}
          options={list}
          className="searchSelect"
          disabled={isDisabled}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
          placeholder={placeholder}
          required={required}
        />
      </div>
    )
  }
}

SearchSelect.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** Option to be shown as placeholder. */
  placeholder: PropTypes.string,
  /** List of options to populate select. */
  list: PropTypes.array.isRequired,
  /** Visually change input to show error. */
  hasError: PropTypes.bool,
  /** Allow select value blank */
  required: PropTypes.bool,
  /** Make input disabled. */
  isDisabled: PropTypes.bool,
  /** Receive a key from the list to be the default value. */
  defaultValue: PropTypes.any,
  /** Callback on change */
  onChange: PropTypes.func,
  /** Callback on focus */
  onFocus: PropTypes.func,
  /** Callback on blur */
  onBlur: PropTypes.func,
  /** Append css classes to the select wrapper. */
  className: PropTypes.string,
  /** Append css classes to the select */
  elementClassName: PropTypes.string,
  /** Append css classes to the select */
  value: PropTypes.string
}

SearchSelect.defaultProps = {
  name: null,
  placeholder: 'Select...',
  hasError: false,
  isDisabled: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: ''
}

export default SearchSelect
