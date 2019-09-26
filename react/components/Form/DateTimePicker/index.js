import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'

import './react-datepicker.global.css'
import styles from './style.css'

import * as locales from './locales'

class DateTimePicker extends PureComponent {
  componentDidMount() {
    const { options: { locale } } = this.props
    const formattedLocale = locale.split('-')[0].toUpperCase()
    const localeRegister = locales[formattedLocale]

    registerLocale(locale, localeRegister)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = value => {
    this.setState({ value })
    this.props.onChange && this.props.onChange(value)
  }

  handleFocus = event => {
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.props.onBlur && this.props.onBlur(event)
  }

  handleKeyPress = event => {
    this.props.onKeyPress && this.props.onKeyPress(event)
  }

  handleKeyDown = event => {
    this.props.onKeyDown && this.props.onKeyDown(event)
  }

  handleKeyUp = event => {
    this.props.onKeyUp && this.props.onKeyUp(event)
  }

  render() {
    const {
      hasError,
      disabled,
      placeholder,
      maxLength,
      className,
      containerClassName,
      name,
      id,
      label,
      options,
      withoutStyle,
      defaultValue
    } = this.props

    let padding = 'g-ph4 f6 '
    let style = `${styles.input} ba br2 g-h11 `

    let colors = ``
    if (disabled) colors += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError && !withoutStyle) colors += 'b--base-4 bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    let DateTimePickerClasses = style + padding + colors + className

    const inputId = id || name
    const props = {
      name: name,
      id: inputId,
      placeholderText: placeholder,
      onChange: this.handleChange,
      disabled: disabled,
      maxLength: maxLength,
      defaultValue: defaultValue,
      calendarClassName: 'zeitungMicroPro',
      useShortMonthInDropdown: true,
      ...options,
    }

    if (this.props.suffix) {
      return (
        <div className={`dib datepicker_gocommerce ${className} ${containerClassName}`}>
          <div className="flex">
            <DatePicker {...props} className={`${DateTimePickerClasses} w-100 dib ba br-0 br1 br--left`} />
            <span className={`ba br2 br--right b--base-4 inline-flex items-center g-ph3 c-on-base-2`}>
              {this.props.suffix}
            </span>
          </div>
        </div>
      )
    }
    if (this.props.iconBefore) {
      return (
        <div
          className={`dib datepicker_gocommerce ${style} ${colors} ${className} overflow-hidden ${containerClassName}`}
        >
          <div className="flex flex-auto items-center ">
            <div className="g-pl3">{this.props.iconBefore}</div>
            <DatePicker {...props} className={`${colors} ${padding} ${style} bn w-100 dib`} />
          </div>
        </div>
      )
    } else {
      return (
        <div className={`dib datepicker_gocommerce ${containerClassName}`}>
          {label && <label className="db c-on-base-2 g-mb1 g-f2 lh-copy" htmlFor={inputId}>{label}</label>}
          <DatePicker {...props} className={DateTimePickerClasses} />
        </div>
      )
    }
  }
}

DateTimePicker.propTypes = {
  /** Set DateTimePicker's label. */
  label: PropTypes.string,
  /** Set DateTimePicker's name. */
  name: PropTypes.string,
  /** Set DateTimePicker's id. */
  id: PropTypes.string,
  /** Set the value of the DateTimePicker. */
  value: PropTypes.any,
  /** Set the DefaultValue of the DateTimePicker. */
  defaultValue: PropTypes.any,
  /** Add placeholder text. */
  placeholder: PropTypes.string,
  /** Visually change DateTimePicker to present error. */
  hasError: PropTypes.bool,
  /** Make DateTimePicker disabled. */
  disabled: PropTypes.bool,
  /** Callback on change, return Moment Object */
  onChange: PropTypes.func,
  /** Append css classes to the DateTimePicker. */
  className: PropTypes.string,
  /** Append css classes to the Container Div. */
  containerClassName: PropTypes.string,
  /** Show a field after DateTimePicker. */
  suffix: PropTypes.string,
  /** Show a icon before DateTimePicker. */
  iconBefore: PropTypes.element,
  /** ReactJS Datepicker options. https://reactdatepicker.com */
  options: PropTypes.object
}

DateTimePicker.defaultProps = {
  value: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  onChange: null,
  className: '',
  containerClassName: '',
  maxLength: null,
  showMaxLength: false,
  suffix: null,
  iconBefore: null
}

export default DateTimePicker
