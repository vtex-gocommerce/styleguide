import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/index'
import AutoCompleteList from '../AutoCompleteList/index'
import Tag from '../../Indicators/Tag/index'

class InputTag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: props.disabled,
      input: '',
      values: props.defaultValues || props.values || []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({
        disabled: nextProps.disabled
      })
    }

    if (nextProps.values !== this.props.values) {
      this.setState({
        values: nextProps.values
      })
    }

    if (nextProps.input !== this.props.input) {
      this.setState({
        input: nextProps.input
      })
    }
  }

  handleChangeValues = () => {
    this.props.onChangeValues(this.state.values)
    this.props.onChange && this.props.onChange({ target: { value: this.state.values } })
  }

  handleChangeInput = () => {
    this.props.onChangeInput(this.state.input)
  }

  onKeyPressAtOptionValue = event => {
    const value = event.target.value

    if (event.key == 'Enter' && value !== '' && value !== ',') {
      this.setValuesToStateAndHandle(value)
    }

    if ((event.key == 'Backspace' || event.key == 'Delete') && value === '') {
      this.removeLastValueOnPressBackSpaceButton()
    }
  }

  onChangeValue = event => {
    const value = event.target.value

    if (value.includes(',') && value.length > 1) {
      return this.setValuesToStateAndHandle(value)
    }

    this.setState(
      {
        input: value
      },
      () => this.handleChangeInput()
    )
  }

  onBlur = e => {
    const value = e.target.value

    if (value !== '' && value !== ',') {
      this.setValuesToStateAndHandle(value)
    }

    this.props.onBlur && this.props.onBlur(e)
  }

  onFocus = e => {
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
        values: values
      },
      () => this.handleChangeValues()
    )
  }

  setValuesToStateAndHandle = value => {
    let newValues = [...this.state.values, value.replace(',', '')]

    if (!this.props.allowDuplicate && this.checkIfValueAlreadyExists(value)) {
      this.setState(
        {
          input: ''
        },
        () => this.handleChangeInput()
      )

      return this.props.onDuplicateItem(value)
    }

    this.setState(
      {
        values: newValues,
        input: ''
      },
      () => this.handleChangeValues()
    )
  }

  removeLastValueOnPressBackSpaceButton = () => {
    let newValues = [...this.state.values]
    let indexToRemove = newValues.length - 1

    newValues.splice(indexToRemove, 1)
    this.setState(
      {
        values: newValues
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
      <React.Fragment>
        {this.state.values.map((data, key) => (
          <span key={key} className="inline-flex g-ml1 g-mb1 g-mt1">
            <Tag style={this.props.tagStyle} onRemove={() => this.onRemoveValue(data)}>
              {data}
            </Tag>
          </span>
        ))}
        <div className="dn db-ns flex-auto">{this.renderInput()}</div>
      </React.Fragment>
    )
  }

  renderInput = (forceShowPlaceHolder = false) => {
    if (this.props.autocomplete) {
      return (
        <AutoCompleteList
          inputId='option_values'
          name="option_values"
          className={`dib w-100 b--none`}
          value={this.state.input}
          disabled={this.state.disabled}
          placeholder={!this.state.values.length || forceShowPlaceHolder ? this.props.placeholder : ''}
          onChange={this.onChangeValue}
          list={this.props.source}
          onClick={this.setValuesToStateAndHandle}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyPressAtOptionValue}
        />
      )
    }

    return (
      <Input
        name="option_values"
        className={`dib w-100 ${this.props.hasError ? '' : 'b--none g-pl1'}`}
        hasError={this.props.hasError}
        value={this.state.input}
        disabled={this.state.disabled}
        placeholder={!this.state.values.length || forceShowPlaceHolder ? this.props.placeholder : ''}
        onChange={this.onChangeValue}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyPressAtOptionValue}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={`flex flex-wrap items-center ba br2 b--base-4 ${this.props.className} ${
            this.props.disabled ? 'bg-base-2' : ''
          }`}
        >
          <div className="dn flex-ns flex-wrap w-100">{this.getTagList()}</div>
          <div className="db dn-ns flex-auto">{this.renderInput(true)}</div>
        </div>
        <div className="db dn-ns g-pt2">{this.getTagList()}</div>
      </React.Fragment>
    )
  }
}

InputTag.propTypes = {
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
  autocomplete: PropTypes.bool,
  source: PropTypes.array,
}

InputTag.defaultProps = {
  autocomplete: false,
  disabled: false,
  hasError: false,
  values: [],
  className: '',
  placeholder: 'Enter values separated by commas',
  tagStyle: 'default',
  allowDuplicate: true,
  onDuplicateItem: values => {},
  onChangeValues: values => {},
  onChangeInput: input => {},
  source: [],
}

export default InputTag
