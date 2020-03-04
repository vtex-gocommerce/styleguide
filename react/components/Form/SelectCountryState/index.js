import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Input from './../Input'
import Select from './../Select/index'

// http://battuta.medunes.net/api/region/ar/all/?key=295f77b7ce1151371edb94429a2437c5

class SelectCountryState extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      countryCode: props.defaultCountryCode || props.countryCode,
      value: props.value,
      loadedCountryStates: null,
    }
  }

  componentDidMount = () => {
    const countryCode = this.props.defaultCountryCode || this.props.countryCode
    this.setLocale(countryCode)
  }

  componentDidUpdate = prevProps => {
    if (this.props.countryCode !== prevProps.countryCode) { this.setLocale(this.props.countryCode) }
    if (this.state.value !== this.props.value) { this.setState(prevState => ({ ...prevState, value: this.props.value })) }
  }

  setLocale = countryCode => {
    Promise.resolve(import(`./locales/${countryCode}.js`))
      .then(loadedCountryStates => {
        this.setState(prevState => ({ ...prevState, loadedCountryStates: loadedCountryStates.default }))
      })
      .catch(() => {
        this.setState(prevState => ({ ...prevState, loadedCountryStates: null }))
      })
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({ value })
    this.props.onChange && this.props.onChange(event)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { name, id, placeholder, disabled, hasError, required, className, defaultValue } = this.props
    const { loadedCountryStates, value } = this.state

    const list =
      loadedCountryStates &&
      loadedCountryStates.reduce((prev, element) => [...prev, { label: element, value: element }], [])

    return list ? (
      <Select
        name={name}
        id={id || name}
        className={className}
        disabled={disabled}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={value}
        list={list}
        hasError={hasError}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    ) : (
      <Input
        name={name}
        id={id || name}
        className={className}
        disabled={disabled}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={value}
      />
    )
  }
}

SelectCountryState.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** (Input id attribute) */
  id: PropTypes.string,
  /** Set the value of the input. */
  value: PropTypes.any,
  /** Option to be shown as placeholder. */
  placeholder: PropTypes.string,
  /** Visually change input to show error. */
  hasError: PropTypes.bool,
  /** Allow select value blank */
  required: PropTypes.bool,
  /** Make input disabled. */
  disabled: PropTypes.bool,
  /** Receive a a 3 letter Country Code to be the default value. */
  defaultCountryCode: PropTypes.any,
  /** Receive a a 3 letter Country Code. */
  countryCode: PropTypes.any,
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
  /** defaultValue */
  defaultValue: PropTypes.string,
}

SelectCountryState.defaultProps = {
  name: null,
  id: null,
  placeholder: '',
  hasError: false,
  disabled: false,
  defaultCountryCode: '',
  countryCode: '',
  required: false,
  className: '',
  elementClassName: '',
}

export default SelectCountryState
