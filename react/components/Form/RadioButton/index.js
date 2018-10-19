import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheck from '../../../icons/IconCheck'
import styles from './style.css'

class RadioButton extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked
    }
  }

  componentDidMount(nextProps, nextState) {
    this.props.containerBuild && this.props.containerBuild(nextProps)
  }

  handleClick = event => {
    this.setState(prev => ({
      checked: true
    }))

    this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { disabled, value, name, width, height, className, id, hasError, label } = this.props
    const { checked } = this.state

    let classesCircleOutside = `b--base-4 `
    let classesCircleInside = ''

    if (disabled) {
      classesCircleOutside += 'bg-base-3 b--base-4'
    } else {
      classesCircleOutside += 'bg-base-1'
      classesCircleInside += checked ? 'bg-primary' : 'bg-base-1'
    }

    classesCircleOutside = hasError ? 'b--danger' : classesCircleOutside

    return (
      <label
        className={`gc-radiobutton dib inline-flex items-center w-auto ${className} ${!disabled && 'pointer'} ${
          styles.gc_radiobutton
        }`}
      >
        <input
          id={id || name}
          type="radio"
          className="dn"
          disabled={disabled}
          defaultChecked={checked}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
        <div className={classesCircleOutside} style={{ width: width || '20px', height: height || '20px' }}>
          <span className={`icon ${classesCircleInside}`} />
        </div>
        {label && <span className="g-ml2 hover-c-primary pointer">{label}</span>}
      </label>
    )
  }
}

RadioButton.propTypes = {
  /** Set Radio Button Id */
  id: PropTypes.string,
  /** Make toggle checked! */
  checked: PropTypes.bool,
  /** Make toggle disabled! */
  disabled: PropTypes.bool,
  /** Make toggle withError! */
  hasError: PropTypes.bool,
  /** Set name of toggle. */
  name: PropTypes.string.isRequired,
  /** Set value of toggle. */
  value: PropTypes.string,
  /** Set width of radio */
  width: PropTypes.string,
  /** Set height of radio */
  height: PropTypes.string,
  /** Append css classes to the parent. */
  className: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func,
  /** Label [optional] */
  label: PropTypes.string
}

RadioButton.defaultProps = {
  label: null,
  checked: false,
  disabled: false,
  className: '',
  onClick: checked => {}
}

export default RadioButton
