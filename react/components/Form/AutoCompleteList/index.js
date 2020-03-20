import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Input from '../Input'

class AutoCompleteList extends PureComponent {
  state = {
    value: this.props.defaultValue,
    isControlled: this.props.value !== undefined,
    isFocused: false,
  }

  onClick = e => {
    const clickedLabel = this.props.list.find(item => {
      return item.id == e.target.value
    }).label

    // steal click with a custom function
    if (this.props.onClick) {
      return this.props.onClick(clickedLabel)
    }

    this.setState({ value: clickedLabel })
    this.onChange({ target: { value: clickedLabel, name: this.props.inputName } })
  }

  onBlur = e => {
    // Prevent to hide autocomplete list before the time when click on item in the list
    setTimeout(() => {
      this.setState({ isFocused: false })
    }, 200)

    // this.props.onBlur && this.props.onBlur(e)
  }

  onFocus = e => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus(e)
  }

  onChange = e => {
    this.props.onChange && this.props.onChange(e)
  }

  onInputChange = event => {
    this.setState({ value: event.target.value })
    this.props.onChange && this.props.onChange(event)
  }

  filteredList = _filterInput => {
    if (!this.state.isFocused) return []

    return (
      this.props.list.filter((element) => {
        const elementLabel = element.label.toUpperCase()
        const filterInput = _filterInput.toUpperCase()
        return elementLabel.includes(filterInput) && filterInput != elementLabel
      }) || []
    )
  }

  render() {
    const { inputName, inputId, className, hasError, placeholder, disabled, iconBefore, onKeyDown } = this.props
    const { isControlled } = this.state

    const value = isControlled ? this.props.value : this.state.value
    const filteredList = this.filteredList(value)

    return (
      <div className="db w-100">
        <div className="relative w-100">
          <Input
            className={`w-100 ${className}`}
            name={inputName}
            id={inputId || inputName}
            disabled={disabled}
            value={value}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder={placeholder}
            hasError={hasError}
            iconBefore={iconBefore}
            onKeyDown={onKeyDown}
          />
          <React.Fragment>
            {filteredList.length > 0 && (
              <div className={`${styles.gc_autocompletelist} w-100 bg-white mt1 ba br2 b--base-4`}>
                <ul className="list pt4 pb2 ph4 mt0 mb0 c-on-base-1 tl">
                  {filteredList.map((item) => (
                    <li key={item.label} className="pb2 pointer" value={item.id} onClick={this.onClick}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    )
  }
}

AutoCompleteList.propTypes = {
  inputName: PropTypes.string,
  inputId: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
      label: PropTypes.string.isRequired
    })
  ),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconBefore: PropTypes.element,
}

AutoCompleteList.defaultProps = {
  inputName: '',
  inputId: '',
  className: '',
  defaultValue: '',
  list: [],
  hasError: false,
  disabled: false,
  iconBefore: null,
}

export default AutoCompleteList
