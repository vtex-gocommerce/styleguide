import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Input from './../Input'
import Tag from './../../Indicators/Tag'

class InputTag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: props.isDisabled,
      input: '',
      values: props.values || []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDisabled !== this.props.isDisabled) {
      this.setState({
        isDisabled: nextProps.isDisabled
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
  }

  handleChangeInput = () => {
    this.props.onChangeInput(this.state.input)
  }

  onKeyPressAtOptionValue = event => {
    const value = event.target.value

    if (event.key == 'Enter') {
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

    if (value.includes(',')) {
      this.setState(
        {
          values: [...this.state.values, value.replace(',', '')],
          addValue: false
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
          className="dib w-auto flex-auto b--none g-pl1"
          value={this.state.input}
          isDisabled={this.state.isDisabled}
          placeholder={this.props.placeholder}
          onChange={this.onChangeValue}
          onKeyDown={this.onKeyPressAtOptionValue}
        />
      </div>
    )
  }
}

InputTag.propTypes = {
  isDisabled: PropTypes.bool,
  values: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  tagStyle: PropTypes.string,
  onChangeValues: PropTypes.func,
  onChangeInput: PropTypes.func
}

InputTag.defaultProps = {
  isDisabled: false,
  values: [],
  className: '',
  placeholder: 'Enter values separated by commas',
  tagStyle: 'default',
  onChangeValues: values => {},
  onChangeInput: input => {}
}

export default InputTag
