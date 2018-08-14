import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import './reactSelect.global.css'
import './component.global.css'

class SearchSelect extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: this.getValue(props.defaultValue)
    }
  }

  handleChange = event => {
    const value = event
    this.setState({ value })
    this.props.onChange && this.props.onChange({ target: { value: value.value } })
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  getValue = value => {
    const { list } = this.props
    for (let key in list) {
      if (list[key].value === value) return list[key]
    }
  }

  render() {
    const { name, placeholder, list, disabled, hasError, required } = this.props
    const { value } = this.state

    let classes = !!hasError ? 'ba br1 b--red bg-red-light red' : ''
    return (
      <div className={`${this.props.className}`}>
        <Select
          defaultValue={value}
          name={name}
          options={list}
          className={`searchSelect ${classes}`}
          hasError={hasError}
          disabled={disabled}
          onChange={this.handleChange}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
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
  disabled: PropTypes.bool,
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
  placeholder: '',
  hasError: false,
  disabled: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: ''
}

export default SearchSelect
