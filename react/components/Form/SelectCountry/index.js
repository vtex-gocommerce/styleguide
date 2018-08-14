import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import countries from 'i18n-country-code/locales/en.json'

class SelectCountry extends PureComponent {
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
    const { name, placeholder, disabled, hasError, required } = this.props
    const { value } = this.state

    const list = Object.keys(countries).reduce(
      (prev, element) => [...prev, { label: countries[element], value: element }],
      []
    )
    let classes = 'g-pa3 ba br1 '
    if (disabled) classes += 'b--base-4 bg-base-3 c-on-base-2  '
    if (hasError) classes += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError) classes += 'b--base-4 bg-base-1 c-on-base-1 '
    classes += this.props.elementClassName

    return (
      <div className={`${styles.selectWrapper} ${this.props.className}`}>
        <select
          name={name}
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
          {list.map((item, index) => {
            return (
              <option key={item.value} value={`${item.value}`} disabled={item.disabled}>
                {item.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

SelectCountry.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** Option to be shown as placeholder. */
  placeholder: PropTypes.string,
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
  elementClassName: PropTypes.string
}

SelectCountry.defaultProps = {
  name: null,
  placeholder: '',
  hasError: false,
  disabled: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: ''
}

export default SelectCountry
