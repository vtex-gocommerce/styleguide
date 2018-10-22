import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tab extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.initialTab
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forceValue && nextProps.forceValue != this.props.forceValue) {
      this.setState({ active: nextProps.forceValue })
    }
  }

  handleClick = value => {
    this.setState({ active: value })
    this.props.onClick(value)
  }

  render() {
    const { list, initialTab, className } = this.props
    const { active } = this.state

    return (
      <div className={`g-f2 w-100 ${className}`}>
        {list.map(element => {
          return (
            <div
              key={element.id}
              className={`dib g-pt2 g-pb4 g-mr4 pointer hover-c-primary  ${
                element.id === active ? 'bb bw1 c-primary b--primary' : 'c-on-base-2'
              }`}
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
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
    })
  ).isRequired,
  /** Set initial tab value. */
  initialTab: PropTypes.string.isRequired,
  /** Callback when clicking a tab. */
  onClick: PropTypes.func.isRequired,
  /** Append css classes to the tab. */
  className: PropTypes.string,
  /** force a new active tab */
  forceValue: PropTypes.string
}

Tab.defaultProps = {
  className: ''
}

export default Tab
