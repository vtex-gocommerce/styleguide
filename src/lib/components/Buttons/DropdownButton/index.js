import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

const sizes = {
  large: 'g-ph8 g-pv4 g-f3 ',
  normal: 'g-ph6  g-pv3 g-f2 ',
  small: 'g-ph2  g-pv1 g-f1 '
}

const styles = {
  primary: 'bg-animate ba b--blue hover-b--blue-80 bg-blue hover-bg-blue-80 white pointer ',
  secondary: 'bg-animate ba b--navy hover-b--navy-80 bg-navy hover-bg-navy-80 white pointer ',
  outline: 'bg-animate ba b--blue bg-transparent hover-bg-blue-20 blue pointer ',
  danger: 'ba b--red bg-red dim white pointer'
}

class DropdownButton extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpened
    }
  }

  handleClick = event => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClickOutside = event => {
    this.setState({ isOpen: false })
  }

  render() {
    const { options, buttonType } = this.props
    const { isOpen } = this.state

    return (
      <div className="relative" onClick={this.handleClick}>
        {this.props.children}
        {isOpen && (
          <div className="absolute ba b--base-3 w-100 z-4">
            <ul className="list g-ma0 g-pa0">
              {options.map(option => {
                return (
                  <li className="bb b--base-3 bg-base-1 hover-bg-base-3 g-pa3 c-on-base-1 pointer" onClick={option.callback}>
                    {option.label}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

DropdownButton.propTypes = {
  /** Define the size of the button. */
  options: PropTypes.array.isRequired,
  isOpened: PropTypes.boolean,
  children: PropTypes.node.isRequired
}

DropdownButton.defaultProps = {
  isOpened: false
}

export default onClickOutside(DropdownButton)
