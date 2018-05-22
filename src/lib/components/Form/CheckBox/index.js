import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheck from '../../../icons/IconCheck'
import styles from './style.css'

class CheckBox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: this.props.isChecked
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.isChecked != this.state.isChecked) {
      this.setState({ isChecked: nextProps.isChecked })
    }
  }

  handleClick = event => {
    this.setState(prev => ({
      isChecked: !prev.isChecked
    }))

    this.props.onClick(!this.state.isChecked)
  }

  render() {
    const { isDisabled, value, name } = this.props
    const { isChecked } = this.state

    let classes = `flex justify-center items-center ba br2 ${styles.checkbox} `

    if (isDisabled) {
      classes += 'bg-navy-40 b--navy-60'
    } else {
      classes += isChecked ? 'bg-blue b--blue' : 'bg-white b--navy-60'
    }

    return (
      <label className={`dib g-w5 ${!isDisabled && 'pointer'}`}>
        <div className={classes}>
          <IconCheck className={`white ${!isChecked && 'o-0'}`} ignoreSize />
        </div>
        <input
          type="checkbox"
          className="dn"
          disabled={isDisabled}
          defaultChecked={isChecked}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
      </label>
    )
  }
}

CheckBox.propTypes = {
  /** Make toggle checked! */
  isChecked: PropTypes.bool,
  /** Make toggle disabled! */
  isDisabled: PropTypes.bool,
  /** Set name of toggle. */
  name: PropTypes.string,
  /** Set value of toggle. */
  value: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func
}

CheckBox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onClick: checked => {}
}

export default CheckBox
