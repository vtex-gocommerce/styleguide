import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Tag from '../../Indicators/Tag'

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
      this.setState(
        {
          values: [...this.state.values, value.replace(',', '')],
          input: ''
        },
        () => this.handleChangeValues()
      )
    }
  }

  onChangeValue = event => {
    let value = event.target.value

    if (value.includes(',') && value.length > 1) {
      this.setState(
        {
          values: [...this.state.values, value.replace(',', '')]
        },
        () => this.handleChangeValues()
      )

      value = ''
    }

    this.setState(
      {
        input: value
      },
      () => this.handleChangeInput()
    )
  }

  onBlur = e => {
    this.setState(
      {
        values: [...this.state.values, e.target.value.replace(',', '')],
        input: ''
      },
      () => this.handleChangeValues()
    )

    this.props.onBlur && this.props.onBlur(e)
  }

  onRemoveValue = value => {
    const values = this.state.values
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

  render() {
    return (
      <div className={`flex flex-wrap items-center ba br2 b--base-3 ${this.props.className}`}>
        <div className="">
          {this.state.values.map((data, key) => (
            <span key={key} className="dib g-ml1">
              <Tag style={this.props.tagStyle} onRemove={() => this.onRemoveValue(data)}>
                {data}
              </Tag>
            </span>
          ))}
        </div>
        <Input
          name="option_values"
          className={`dib w-auto flex-auto ${this.props.hasError ? '' : 'b--none g-pl1'}`}
          hasError={this.props.hasError}
          value={this.state.input}
          disabled={this.state.disabled}
          placeholder={this.props.placeholder}
          onChange={this.onChangeValue}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyPressAtOptionValue}
        />
      </div>
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
  onChangeValues: PropTypes.func,
  onChangeInput: PropTypes.func
}

InputTag.defaultProps = {
  disabled: false,
  hasError: false,
  values: [],
  className: '',
  placeholder: 'Enter values separated by commas',
  tagStyle: 'default',
  onChangeValues: values => {},
  onChangeInput: input => {}
}

export default InputTag
