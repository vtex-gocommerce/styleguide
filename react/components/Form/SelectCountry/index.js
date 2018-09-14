import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import countries_en from 'i18n-country-code/locales/en.json'
import countries_pt from 'i18n-country-code/locales/pt.json'
import countries_es from 'i18n-country-code/locales/es.json'

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

  getElementList = () => {
    const { includedCountries, language } = this.props
    const languageBase = language.split('-')[0]
    const countries =
      (languageBase === 'en' && countries_en) ||
      (languageBase === 'pt' && countries_pt) ||
      (languageBase === 'es' && countries_es)

    return Object.keys(countries).reduce((prev, element) => {
      if (includedCountries) {
        if (includedCountries.includes(element)) {
          return [...prev, { label: countries[element], value: element }]
        }
        return prev
      }
      return [...prev, { label: countries[element], value: element }]
    }, [])
  }

  render() {
    const { name, id, placeholder, disabled, hasError, required } = this.props
    const { value } = this.state

    const list = this.getElementList()

    let classes = 'g-pa3 ba br1 '
    if (disabled) classes += 'b--base-4 bg-base-3 c-on-base-2  '
    if (hasError) classes += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError) classes += 'b--base-4 bg-base-1 c-on-base-1 '
    classes += this.props.elementClassName

    return (
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
  /** Included countries. */
  includedCountries: PropTypes.array,
  /** language of the country names. */
  language: PropTypes.string,
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
  id: null,
  placeholder: '',
  hasError: false,
  disabled: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: '',
  language: 'en-us'
}

export default SelectCountry
