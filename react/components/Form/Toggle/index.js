import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Toggle extends PureComponent {
  constructor(props) {
    super(props)

    const checked = props.defaultChecked || props.checked || false
    this.state = {
      prevPropsValue: checked,
      checked: checked
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.checked !== prevState.prevPropsValue) {
      return { checked: nextProps.checked, prevPropsValue: nextProps.checked }
    }
  }

  handleClick = event => {
    this.setState(prev => ({
      checked: !prev.checked
    }))

    this.props.onClick(event, !this.state.checked)
  }

  render() {
    const { disabled, value, name, id, className, hasError } = this.props
    const { checked } = this.state

    let classes = `flex items-center relative g-h8 g-ph4 br-pill ${styles.toggle} `
    let circle = `absolute br-100 ${styles.toggleCircle} `

    if (disabled) {
      classes += 'bg-base-1 ba b--base-4'
      circle += checked ? 'bg-primary ' : 'bg-on-base-2 '
      circle += checked ? `${styles.toggledCircle}` : 'left-0 '
    } else {
      classes += 'bg-base-1 ba b--base-4'
      circle += checked ? 'bg-primary ' : 'bg-on-base-2 '
      circle += checked ? `${styles.toggledCircle}` : 'left-0 '
    }

    classes += hasError ? ' ba b--danger' : ''

    return (
      <label className={`${className} ${!disabled && 'pointer'}`}>
        <div className={classes}>
          <div className={circle} />
        </div>
        <input
          name={name}
          id={id || name}
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
  onClick: PropTypes.func
}

Toggle.defaultProps = {
  disabled: false,
  value: '',
  className: '',
  onClick: checked => {}
}

export default Toggle
