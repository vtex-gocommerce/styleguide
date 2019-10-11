import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheck from '../../../icons/IconCheck'
import styles from './style.css'

class CheckBox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return { checked: props.checked }
    }
  }

  handleClick = event => {
    this.setState(prev => ({
      checked: !prev.checked,
    }))

    this.props.onClick(event, !this.state.checked)
  }

  render() {
    const { disabled, value, name, hasError, id } = this.props
    const { checked } = this.state

    const inputId = id || name
    let classes = `flex justify-center items-center ba br2 ${styles.checkbox} `

    if (disabled) {
      classes += 'bg-base-1 b--base-3'
    } else {
      classes += checked ? 'bg-blue b--blue' : 'bg-white b--base-3'
    }

    classes = hasError ? `${classes} b--danger` : classes

    return (
      <label className={`dib g-w5 ${!disabled && 'pointer'}`} htmlFor={inputId}>
        <div className={classes}>
          <IconCheck className={`white ${!checked && 'o-0'}`} />
        </div>
        <input
          id={inputId}
          type="checkbox"
          className="dn"
          disabled={disabled}
          defaultChecked={checked}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
      </label>
    )
  }
}

CheckBox.propTypes = {
  /** Set id of CheckBox. */
  id: PropTypes.string,
  /** Make CheckBox checked! */
  checked: PropTypes.bool,
  /** Make CheckBox disabled! */
  disabled: PropTypes.bool,
  /** Make CheckBox withError! */
  hasError: PropTypes.bool,
  /** Set name of CheckBox. */
  name: PropTypes.string,
  /** Set value of CheckBox. */
  value: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func,
}

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  onClick: () => {},
}

export default CheckBox
