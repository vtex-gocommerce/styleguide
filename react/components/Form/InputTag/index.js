import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/index'
import AutoCompleteList from '../AutoCompleteList/index'
import Tag from '../../Indicators/Tag/index'

class InputTag extends Component {
  _inputId

  constructor(props) {
    super(props)

    this._inputId = props.id || props.name
    this.state = {
      disabled: props.disabled,
      input: '',
      values: props.defaultValues || props.values || [],
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.setState({
        disabled: this.props.disabled,
      })
    }
    if (prevProps.values !== this.props.values) {
      this.setState({
        values: this.props.values,
        input: '',
      })
    }
    if (prevProps.input !== this.props.input) {
      this.setState({
        input: this.props.input,
      })
    }
  }

  handleChangeValues = () => {
    this.props.onChangeValues(this.state.values)
    this.props.onChange && this.props.onChange({ target: { value: this.state.values, name: this.props.name } })
  }

  handleChangeInput = () => {
    this.props.onChangeInput(this.state.input)
  }

  handleKeyPressAtOptionValue = event => {
    const value = event.target.value

    if (event.key === 'Enter' && value !== '' && value !== ',') {
      event.preventDefault()
      this.handleSetValuesToStateAndHandle(value)
    }

    if ((event.key === 'Backspace' || event.key === 'Delete') && value === '') {
      this.removeLastValueOnPressBackSpaceButton()
    }
  }

  handleChangeValue = event => {
    const value = event.target.value

    if (value.includes(',') && value.length > 1) {
      return this.handleSetValuesToStateAndHandle(value)
    }

    this.setState(
      {
        input: value,
      },
      () => this.handleChangeInput()
    )
  }

  handleBlur = e => {
    const value = e.target.value

    if (value !== '' && value !== ',') {
      this.handleSetValuesToStateAndHandle(value)
    }

    this.props.onBlur && this.props.onBlur(e)
  }

  handleFocus = e => {
    this.props.onFocus && this.props.onFocus(e)
  }

  onRemoveValue = value => {
    const values = [...this.state.values]
    const index = values.indexOf(value)

    if (index > -1) {
      values.splice(index, 1)
    }

    this.setState(
      {
        values: values,
      },
      () => this.handleChangeValues()
    )
  }

  handleSetValuesToStateAndHandle = value => {
    const cleanedValue = value.replace(',', '').trim()
    const formattedValue = this.props.beforeAddItem(cleanedValue)
    const newValues = !!formattedValue
      ? [...this.state.values, formattedValue]
      : [...this.state.values]

    if (!this.props.allowDuplicate && this.checkIfValueAlreadyExists(formattedValue)) {
      this.setState(
        {
          input: '',
        },
        () => this.handleChangeInput()
      )

      return this.props.onDuplicateItem(formattedValue)
    }

    this.setState(
      {
        values: newValues,
        input: '',
      },
      () => this.handleChangeValues()
    )
  }

  removeLastValueOnPressBackSpaceButton = () => {
    const newValues = [...this.state.values]
    const indexToRemove = newValues.length - 1

    newValues.splice(indexToRemove, 1)
    this.setState(
      {
        values: newValues,
      },
      () => this.handleChangeValues()
    )
  }

  checkIfValueAlreadyExists = valueToCheck => {
    const values = this.state.values

    return values.some(value => value === valueToCheck)
  }

  getTagList = () => {
    return (
      <div className="flex items-center flex-auto">
        {!!this.props.iconBefore && (
          <div className="pa4 gray flex">
            {this.props.iconBefore}
          </div>
        )}

        <div className="flex flex-wrap flex-auto">
          {this.props.fixedTags.map((data, index) => (
            <span key={`${data}#${index}`} className="inline-flex ml1 mb1 mt1 o-50">
              <Tag style={this.props.tagStyle}>
                {data}
              </Tag>
            </span>
          ))}
          {this.state.values.map((data, key) => (
            <span key={key} className="inline-flex ml2 mb3 mt3">
              <Tag
                id={`${this._inputId}_tag${key}`}
                style={this.props.tagStyle}
                onRemove={() => this.onRemoveValue(data)}
              >
                {data}
              </Tag>
            </span>
          ))}
          <div className="dn db-ns flex-auto">{this.renderInput()}</div>
        </div>
      </div>
    )
  }

  renderInput = (forceShowPlaceHolder = false) => {
    if (this.props.autocomplete) {
      return (
        <AutoCompleteList
          inputId={this._inputId}
          name={this.props.name}
          className={`dib w-100 ${this.props.hasError ? '' : 'b--none'}`}
          value={this.state.input}
          disabled={this.state.disabled}
          hasError={this.props.hasError}
          placeholder={!this.state.values.length || forceShowPlaceHolder ? this.props.placeholder : ''}
          onChange={this.handleChangeValue}
          list={this.props.source}
          onClick={this.handleSetValuesToStateAndHandle}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyPressAtOptionValue}
        />
      )
    }

    return (
      <Input
        id={this._inputId}
        name={this.props.name}
        className={`dib w-100 ${this.props.hasError ? '' : "b--none pl1"}`}
        hasError={this.props.hasError}
        value={this.state.input}
        disabled={this.state.disabled}
        placeholder={!this.state.values.length || forceShowPlaceHolder ? this.props.placeholder : ''}
        onChange={this.handleChangeValue}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyPressAtOptionValue}
      />
    )
  }

  render() {
    const { label, className, disabled, required } = this.props

    return (
      <React.Fragment>
        {label && (
          <label
            className="db gray mb1 f6 lh-copy"
            htmlFor={this._inputId}
          >
            {`${label}${required ? '*' : ''}`}
          </label>
        )}
        <div
          className={`flex flex-wrap items-center ba br2 b--silver ${className} ${disabled ? 'bg-base-2' : ''}`}
        >
          <div className="dn flex-ns flex-wrap w-100">{this.getTagList()}</div>
          <div className="db dn-ns flex-auto">{this.renderInput(true)}</div>
        </div>

        <div className="db dn-ns pt2">{this.getTagList()}</div>
      </React.Fragment>
    )
  }
}

InputTag.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  values: PropTypes.any,
  defaultValues: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  tagStyle: PropTypes.string,
  allowDuplicate: PropTypes.bool,
  onDuplicateItem: PropTypes.func,
  onChangeValues: PropTypes.func,
  onChangeInput: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  autocomplete: PropTypes.bool,
  source: PropTypes.array,
  required: PropTypes.bool,
  fixedTags: PropTypes.arrayOf(PropTypes.string),
  beforeAddItem: PropTypes.func,
  iconBefore: PropTypes.element,
}

InputTag.defaultProps = {
  name: 'option_values',
  autocomplete: false,
  disabled: false,
  hasError: false,
  values: [],
  className: '',
  placeholder: 'Enter values separated by commas',
  tagStyle: 'default',
  allowDuplicate: true,
  onDuplicateItem: () => {},
  onChangeValues: () => {},
  onChangeInput: () => {},
  beforeAddItem: value => value,
  source: [],
  input: '',
  required: false,
  fixedTags: [],
  iconBefore: null,
}

export default InputTag
