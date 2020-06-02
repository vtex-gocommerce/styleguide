import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'

import './react-datepicker.global.css'
import styles from './style.css'
import * as locales from './locales'

import InputLabel from '../InputLabel/index'

class DateTimePicker extends PureComponent {
  componentDidMount() {
    const { options: { locale } } = this.props
    const formattedLocale = locale.split('-')[0].toUpperCase()
    /*eslint import/namespace: ['error', { allowComputed: true }]*/
    const localeRegister = locales[formattedLocale]
    registerLocale(locale, localeRegister)
  }

  handleChange = value => {
    this.props.onChange && this.props.onChange({ target: { value, name: this.props.name }})
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
      className,
      containerClassName,
      name,
      id,
      label,
      options,
      withoutStyle,
      defaultValue,
      required,
      value,
    } = this.props

    const padding = "ph4 f6 "
    const style = `${styles.input} ba br2 h-large `

    let colors = ''
    if (disabled) colors += 'b--silver bg-base-3 gray '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError && !withoutStyle) colors += 'b--silver bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    const DateTimePickerClasses = style + padding + colors + className

    const inputId = id || name
    const props = {
      name: name,
      id: inputId,
      placeholderText: placeholder,
      onChange: this.handleChange,
      disabled: disabled,
      defaultValue: defaultValue,
      calendarClassName: 'zeitungMicroPro',
      useShortMonthInDropdown: true,
      dateFormat: 'P',
      autoComplete: 'off',
      selected: value,
      ...options,
    }

    const LabelComponent = (
      <InputLabel
        text={label}
        required={required}
        hasError={hasError}
        htmlFor={inputId}
      />
    )

    if (this.props.suffix) {
      return (
        <React.Fragment>
          {LabelComponent}
          <div className={`dib datepicker_gocommerce ${className} ${containerClassName}`}>
            <div className="flex">
              <DatePicker {...props} className={`${DateTimePickerClasses} w-100 dib ba br-0 br1 br--left`} />
              <span className="ba br2 br--right b--silver inline-flex items-center ph3 gray">
                {this.props.suffix}
              </span>
            </div>
          </div>
        </React.Fragment>
      )
    }
    if (this.props.iconBefore) {
      return (
        <React.Fragment>
          {LabelComponent}
          <div className={`dib datepicker_gocommerce ${style} ${colors} ${className} overflow-hidden ${containerClassName}`}>
            <div className="flex flex-auto items-center ">
              <div className="pl3">{this.props.iconBefore}</div>
              <DatePicker {...props} className={`${colors} ${padding} ${style} bn w-100 dib`} />
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <div className={`dib datepicker_gocommerce ${containerClassName}`}>
        {LabelComponent}
        <DatePicker {...props} className={DateTimePickerClasses} />
      </div>
    )
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
  /** Make it obligatory */
  required: PropTypes.bool,
  /** Visually change DateTimePicker to present error. */
  hasError: PropTypes.bool,
  /** Make DateTimePicker disabled. */
  disabled: PropTypes.bool,
  /** Callback on change, return date Object */
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
  options: PropTypes.object,
  /** remove borders and bgColor. */
  withoutStyle: PropTypes.bool,
  /** On events */
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
}

DateTimePicker.defaultProps = {
  value: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  onChange: null,
  className: '',
  containerClassName: '',
  showMaxLength: false,
  suffix: null,
  iconBefore: null,
  required: false,
}

export default DateTimePicker
