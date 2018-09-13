import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import styles from './style.css'

class DateTimePicker extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue || props.value
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
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
      showMaxLength,
      className,
      name,
      id,
      label,
      options,
      withoutStyle,
      defaultValue
    } = this.props
    const { value } = this.state

    let padding = 'g-ph4 f6 '
    let style = `${styles.DateTimePicker} ba br2 g-h11 `

    let colors = ``
    if (disabled) colors += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) colors += 'b--danger bg-light-danger c-danger '
    if (!disabled && !hasError && !withoutStyle) colors += 'b--base-4 bg-base-1 c-on-base-1 '
    if (withoutStyle) colors += 'c-on-base-1 bg-transparent bn '

    let DateTimePickerClasses = style + padding + colors + className

    const props = {
      name: name,
      id: id || name,
      placeholder: placeholder,
      onChange: this.handleChange,
      disabled: disabled,
      maxLength: maxLength,
      value: value,
      defaultValue: defaultValue,
      options: options
    }

    if (this.props.suffix) {
      return (
        <div className={`dib ${className}`}>
          <div className="flex">
            <Flatpickr {...props} className={`${DateTimePickerClasses} w-100 dib ba br-0 br1 br--left`} />
            <span className={`ba br2 br--right b--base-4 inline-flex items-center g-ph3 c-on-base-2`}>
              {this.props.suffix}
            </span>
          </div>
        </div>
      )
    }
    if (this.props.iconBefore) {
      return (
        <div className={`dib ${style} ${colors} ${className} overflow-hidden`}>
          <div className="flex flex-auto items-center ">
            <div className="g-pl3">{this.props.iconBefore}</div>
            <Flatpickr {...props} className={`${colors} ${padding} ${style} bn w-100 dib`} />
          </div>
        </div>
      )
    } else {
      return (
        <React.Fragment>
          {label && <label className="db c-on-base-2 g-mb1 g-f2 lh-copy">{label}</label>}
          <Flatpickr {...props} className={DateTimePickerClasses} />
          {showMaxLength &&
            maxLength !== 0 && (
              <label
                className={`flex flex-row-reverse db g-pb2 g-pa1 g-f2 ${
                  maxLength - this.state.value.length <= 0 ? 'red' : 'c-on-base-2'
                }`}
              >
                {maxLength && maxLength - this.state.value.length}
              </label>
            )}
        </React.Fragment>
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
  /** Callback on change */
  onChange: PropTypes.func,

  /** Append css classes to the DateTimePicker. */
  className: PropTypes.string,
  /** Max number of characters */
  maxLength: PropTypes.number,
  /** Show Maxlength counter*/
  showMaxLength: PropTypes.bool,
  /** Show a field after DateTimePicker. */
  suffix: PropTypes.string,
  /** Show a icon before DateTimePicker. */
  iconBefore: PropTypes.element,
  /** remove borders and bgColor. */
  withoutStyle: PropTypes.bool,
  /** Flatpicker options */
  options: PropTypes.object
}

DateTimePicker.defaultProps = {
  options: {},
  value: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  onChange: null,
  className: '',
  maxLength: null,
  showMaxLength: false,
  suffix: null,
  iconBefore: null
}

export default DateTimePicker
