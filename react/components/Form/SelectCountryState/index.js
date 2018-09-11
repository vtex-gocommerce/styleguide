import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Input from './../Input'

//http://battuta.medunes.net/api/region/ar/all/?key=295f77b7ce1151371edb94429a2437c5

class SelectCountryStates extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      countryCode: props.defaultCountryCode || props.countryCode,
      value: props.value,
      loadedCountryStates: null
    }
  }

  componentDidMount = () => {
    const countryCode = this.props.defaultCountryCode || this.props.countryCode
    this.setLocale(countryCode)
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.countryCode != nextProps.countryCode) this.setLocale(nextProps.countryCode)
    if (this.state.value != nextProps.value) this.setState(prevState => ({ ...prevState, value: nextProps.value }))
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

  handleInputChamge = event => {
    const inputValue = event.target.countryCode
    this.setState({ inputValue })
    this.props.onChange && this.props.onChange(event)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const { name, id, placeholder, disabled, hasError, required } = this.props
    const { loadedCountryStates, inputValue, value } = this.state

    const list =
      loadedCountryStates &&
      loadedCountryStates.reduce((prev, element) => [...prev, { label: element, value: element }], [])
    let classes = 'g-pa3 ba br1 '
    if (disabled) classes += 'b--base-4 bg-base-3 c-on-base-2  '
    if (hasError) classes += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError) classes += 'b--base-4 bg-base-1 c-on-base-1 '
    classes += this.props.elementClassName

    return list ? (
      <div className={`${styles.selectWrapper} ${this.props.className}`}>
        <select
          name={name}
          id={id || name}
          className={classes}
          disabled={disabled}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
        >
          <option value="" disabled={required}>
            {placeholder}
          </option>
          {list.map(item => {
            return (
              <option key={item.countryCode} value={`${item.value}`} disabled={item.disabled}>
                {item.label}
              </option>
            )
          })}
        </select>
      </div>
    ) : (
      <Input
        name={name}
        id={id || name}
        className={classes}
        disabled={disabled}
        onChange={this.handleInputChamge}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={inputValue}
      />
    )
  }
}

SelectCountryStates.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** (Input id attribute) */
  id: PropTypes.string,
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
  elementClassName: PropTypes.string
}

SelectCountryStates.defaultProps = {
  name: null,
  id: null,
  placeholder: '',
  hasError: false,
  disabled: false,
  defaultCountryCode: '',
  countryCode: '',
  required: false,
  className: '',
  elementClassName: ''
}

export default SelectCountryStates
