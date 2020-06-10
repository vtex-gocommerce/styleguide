import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tab extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.initialTab,
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.forceValue && prevProps.value !== this.props.forceValue) {
      this.setState({ active: this.props.forceValue })
    }
  }

  handleClick = value => {
    this.setState({ active: value })
    this.props.onClick && this.props.onClick(value)
  }

  render() {
    const { list, className } = this.props
    const { active } = this.state

    return (
      <div className={`f6 w-100 ${className} h-100`}>
        {list.map(element => {
          return (
            <div
              key={element.id}
              className={`h-100 dib pb4 mr4 pointer hover-blue  ${element.id === active ? 'bb bw1 c-primary b--blue' : 'gray'}`}
              onClick={() => this.handleClick(element.id)}
            >
              {element.label}
            </div>
          )
        })}
      </div>
    )
  }
}

Tab.propTypes = {
  /** List of tab labels. */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    })
  ).isRequired,
  /** Set initial tab value. */
  initialTab: PropTypes.string.isRequired,
  /** Callback when clicking a tab. */
  onClick: PropTypes.func,
  /** Append css classes to the tab. */
  className: PropTypes.string,
  /** force a new active tab */
  forceValue: PropTypes.string,
}

Tab.defaultProps = {
  className: '',
}

export default Tab
