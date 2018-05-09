import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

const sizes = {
  large: 'ph8 pv4 f3 ',
  normal: 'ph6 pv3  f2 ',
  small: 'ph2 pv1 f1 '
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
        isOpen: this.props.opened
      }
  }

  handleClick = event => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClickOutside = event => {
    this.setState({ isOpen: false })
  }

  render() {
    const { options } = this.props
    const { isOpen } = this.state

    return (
      <div className="flex flex-column" onClick={this.handleClick}>
        {this.props.children}
        {isOpen && (
          <div className="ba b--navy-40 mh1">
            <ul className="list ma0 pa0">
            {options.map((option) => {
              return (
                <li className="bb b--navy-20 bg-white hover-bg-navy-20 pa3 navy pointer" onClick={option.callback}>{option.label}</li>
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
  children: PropTypes.node.isRequired,
}

DropdownButton.defaultProps = {
  isOpened: false,
}

export default onClickOutside(DropdownButton)
