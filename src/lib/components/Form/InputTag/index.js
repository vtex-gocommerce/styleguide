import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class InputTag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: props.isDisabled,
      input: '',
      values: props.values || []
    }
  }

  handleChangeValues = () => {
    this.props.onChangeValues(this.state.values)
  }

  handleChangeInput = () => {
    this.props.onChangeInput(this.state.input)
  }

  onChangeValue = event => {
    let value = event.target.value

    if (value.includes(',')) {
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
            <span key={key} className="g-ml1">
              <Tag onRemove={() => this.onRemoveValue(data)}>{data}</Tag>
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
  onChangeValues: PropTypes.event,
  onChangeInput: PropTypes.event
}

InputTag.defaultProps = {
  isDisabled: false,
  values: [],
  className: '',
  placeholder: 'Enter values separated by commas',
  onChangeValues: values => {},
  onChangeInput: input => {}
}

export default InputTag
