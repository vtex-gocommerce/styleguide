import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconCheck from '../../../icons/IconCheck'
import styles from './style.css'

class RadioButton extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: this.props.isChecked
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    
  }

  handleClick = event => {
    this.setState(prev => ({
      isChecked: true
    }))

    this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { isDisabled, value, name, width, height, className } = this.props
    const { isChecked } = this.state

    let classesCircleOutside = `b--base-4 `
    let classesCircleInside = ''

    if (isDisabled) {
      classesCircleOutside += 'bg-base-3 b--base-4'
    } else {
      classesCircleOutside += 'bg-base-1'
      classesCircleInside += isChecked ? 'bg-primary' : 'bg-base-1'
    }

    return (
      <label className={`gc-radiobutton dib w-auto ${className} ${!isDisabled && 'pointer'} ${styles.gc_radiobutton}`}>
        <input
          type="radio"
          className="dn"
          disabled={isDisabled}
          defaultChecked={isChecked}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
        <div className={classesCircleOutside} style={{width: width || "20px", height: height || "20px"}}>
          <span className={`icon ${classesCircleInside}`}></span>
        </div>
      </label>
    )
  }
}

RadioButton.propTypes = {
  /** Make toggle checked! */
  isChecked: PropTypes.bool,
  /** Make toggle disabled! */
  isDisabled: PropTypes.bool,
  /** Set name of toggle. */
  name: PropTypes.string.isRequired,
  /** Set value of toggle. */
  value: PropTypes.string,
  /** Set width of radio */
  width: PropTypes.string,
  /** Set height of radio */
  height: PropTypes.string,
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** On click callback function. */
  onClick: PropTypes.func
}

RadioButton.defaultProps = {
  isChecked: false,
  isDisabled: false,
  className: '',
  onClick: checked => {}
}

export default RadioButton
