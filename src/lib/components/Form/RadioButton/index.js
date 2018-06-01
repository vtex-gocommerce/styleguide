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
    const { isDisabled, value, name, width, height } = this.props
    const { isChecked } = this.state

    let classesOutside = `b--navy-40 `
    let classesInside = ''

    if (isDisabled) {
      classesOutside += 'bg-navy-20 b--navy-20'
    } else {
      classesOutside += 'bg-white'
      classesInside += isChecked ? 'bg-blue' : 'bg-white'
    }

    return (
      <label className={`gc-radiobutton dib w-auto ${!isDisabled && 'pointer'} ${styles.gc_radiobutton}`}>
        <input
          type="radio"
          className="dn"
          disabled={isDisabled}
          defaultChecked={isChecked}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
        <div className={classesOutside} style={{width: width || "20px", height: height || "20px"}}>
          <span className={`icon ${classesInside}`}></span>
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
  /** On click callback function. */
  onClick: PropTypes.func
}

RadioButton.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onClick: checked => {}
}

export default RadioButton
