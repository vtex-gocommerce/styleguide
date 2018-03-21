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
        this.setState((prev) => ({
            isChecked: !prev.isChecked
        }))
    }

    handleChange = event => {

    }

    render() {
        const { isDisabled } = this.props
        const { isChecked } = this.state

        let classes = `flex items-center relative h6 w10 ph2 br-pill ${styles.toggle} `
        let circle = `absolute br-100 ${styles.toggleCircle} `

        if (isDisabled) {
            classes += 'bg-navy-40'
            circle += 'bg-navy-60'
        } else {
            classes += isChecked ? 'bg-blue' : 'bg-navy-40'
            circle += 'bg-white '
            circle += isChecked ? `${styles.toggledCircle}` : 'left-0 '
        }

        return (
            <label className={`flex flex-row items-center ${!isDisabled && 'pointer'}`}>
                <div className={classes}>
                    <div className={circle} />
                </div>
                <input
                    type="checkbox"
                    className="dn"
                    disabled={isDisabled}
                    checked={isChecked}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                />
            </label>
        )
    }
}

Toggle.propTypes = {
    /** Make toggle checked! */
    isChecked: PropTypes.bool,
    /** Make toggle disabled! */
    isDisabled: PropTypes.bool,
    /** On click callback function. */
    onClick: PropTypes.func,
    /** On click callback function. */
    onChange: PropTypes.func
}

Toggle.defaultProps = {
    isChecked: false,
    isDisabled: false,
    onClick: (checked) => { },
    onChange: (checked) => { }
}

export default Toggle