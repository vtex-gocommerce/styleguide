import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Toggle extends PureComponent {
  constructor(props) {
    super(props)

    const checked = props.defaultChecked || props.checked || false
    this.state = {
      prevPropsValue: checked,
      checked: checked,
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.checked !== prevState.prevPropsValue) {
      return { checked: nextProps.checked, prevPropsValue: nextProps.checked }
    }
    return null
  }

  handleClick = event => {
    this.setState(prev => ({
      checked: !prev.checked,
    }))

    this.props.onClick(event, !this.state.checked)
  }

  render() {
    const { disabled, value, name, id, className, hasError, label } = this.props
    const { checked } = this.state

    const inputId = id || name
    let classes = `flex items-center relative h-small ph4 br-pill ${styles.toggle} `
    let circle = `absolute br-100 ${styles.toggleCircle} `

    if (disabled) {
      classes += 'bg-white ba b--silver'
      circle += checked ? 'bg-blue ' : 'bg-silver '
      circle += checked ? `${styles.toggledCircle}` : 'left-0 '
    } else {
      classes += 'bg-white ba b--silver'
      circle += checked ? 'bg-blue ' : 'bg-silver '
      circle += checked ? `${styles.toggledCircle}` : 'left-0 '
    }

    classes += hasError ? ' ba b--danger' : ''

    return (
      <label className={`${className} ${!disabled && 'pointer'} inline-flex items-center`}>
        <div className={classes}>
          <div className={circle} />
        </div>
        {label && <span className="ml3 hover-blue pointer" htmlFor={inputId}>{label}</span>}

        <input
          name={name}
          id={inputId}
          type="checkbox"
          className="dn"
          disabled={disabled}
          defaultChecked={checked}
          value={value}
          onClick={this.handleClick}
        />
      </label>
    )
  }
}

Toggle.propTypes = {
  /** (Input spec attribute) */
  name: PropTypes.string,
  /** (Input id attribute) */
  id: PropTypes.string,
  /** Make toggle checked! */
  checked: PropTypes.bool,
  /** Make toggle checked! */
  defaultChecked: PropTypes.bool,
  /** Set Toogle withError */
  hasError: PropTypes.bool,
  /** Make toggle disabled! */
  disabled: PropTypes.bool,
  /** Set value of toggle. */
  value: PropTypes.string,
  /** Append css classes to the parent. */
  className: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func,
  /** Label [optional] */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
}

Toggle.defaultProps = {
  label: null,
  disabled: false,
  value: '',
  className: '',
  onClick: () => {},
}

export default Toggle
