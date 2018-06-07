import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Toggle extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: this.props.isChecked
    }
  }

  handleClick = event => {
    this.setState(prev => ({
      isChecked: !prev.isChecked
    }))

    this.props.onClick(event, !this.state.isChecked)
  }

  render() {
    const { isDisabled, value, name, className } = this.props
    const { isChecked } = this.state

    let classes = `flex items-center relative g-h8 g-ph4 br-pill ${styles.toggle} `
    let circle = `absolute br-100 ${styles.toggleCircle} `

    if (isDisabled) {
      classes += 'bg-base-1 ba b--base-4'
      circle += isChecked ? 'bg-success ' : 'bg-on-base-2 '
      circle += isChecked ? `${styles.toggledCircle}` : 'left-0 '
    } else {
      classes += 'bg-base-1 ba b--base-4'
      circle += isChecked ? 'bg-success ' : 'bg-on-base-2 '
      circle += isChecked ? `${styles.toggledCircle}` : 'left-0 '
    }

    return (
      <label className={`${className} ${!isDisabled && 'pointer'}`}>
        <div className={classes}>
          <div className={circle} />
        </div>
        <input
          name={name}
          type="checkbox"
          className="dn"
          disabled={isDisabled}
          defaultChecked={isChecked}
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
  /** Make toggle checked! */
  isChecked: PropTypes.bool,
  /** Make toggle disabled! */
  isDisabled: PropTypes.bool,
  /** Set value of toggle. */
  value: PropTypes.string.isRequired,
  /** Append css classes to the parent. */
  className: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func
}

Toggle.defaultProps = {
  isChecked: false,
  isDisabled: false,
  className: '',
  onClick: checked => {}
}

export default Toggle
