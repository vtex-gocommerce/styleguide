import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || this.props.value || ''
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
    const {
      name,
      id,
      placeholder,
      list,
      disabled: _disabled,
      readOnly,
      hasError,
      required,
      withoutStyle,
      size
    } = this.props
    const { value } = this.state

    const disabled = _disabled || readOnly
    let classesSelectWrapper = `ba br2 `
    if (disabled) classesSelectWrapper += 'b--base-4 bg-base-3 c-on-base-2 '
    if (hasError) classesSelectWrapper += 'b--danger bg-light-danger '
    if (!disabled && !hasError && !withoutStyle) classesSelectWrapper += 'b--base-4 bg-base-1 c-on-base '
    if (withoutStyle) classesSelectWrapper += 'c-on-base-2 bg-transparent bn '

    let classes = `g-pl4 g-pr2 ${size === 'small' ? ' g-h8' : ' g-h11 '} `
    if (disabled) classes += 'c-on-base-2 '
    if (withoutStyle) classes += 'c-on-base-2 '
    if (!disabled && !hasError && !withoutStyle) classes += 'c-on-base '

    classes += 'bg-transparent  w-100 pointer'
    classes += this.props.elementClassName
    return (
      <div className={`${styles.selectWrapper1} ${this.props.className}  pointer`}>
        <select
          name={name}
          id={id || name}
          className={`${classes} ${classesSelectWrapper}`}
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

Select.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** (Input id attribute) */
  id: PropTypes.string,
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
  /** Make input readOnly. */
  readOnly: PropTypes.bool,
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
  /** Set the value of the Select. */
  value: PropTypes.any,
  /** remove borders and bgColor. */
  withoutStyle: PropTypes.bool,
  /** Size */
  size: PropTypes.oneOf(['small', 'default'])
}

Select.defaultProps = {
  name: null,
  id: null,
  placeholder: '',
  hasError: false,
  disabled: false,
  readOnly: false,
  defaultValue: '',
  required: false,
  className: '',
  elementClassName: '',
  size: 'default'
}

export default Select
