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

  render() {
    const { name, placeholder, list, disbled, hasError, required, defaultValue } = this.props
    const { value } = this.state

    let classes = !!hasError ? 'ba br1 b--red bg-red-light red' : ''

    return (
      <div className={`${this.props.className}`}>
        <Select
          defaultValue={defaultValue}
          name={name}
          options={list}
          className={`searchSelect ${classes}`}
          hasError={hasError}
          disabled={disbled}
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
  disbled: PropTypes.bool,
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
  disbled: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: ''
}

export default SearchSelect
