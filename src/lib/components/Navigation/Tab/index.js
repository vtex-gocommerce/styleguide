import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tab extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active: this.props.initialTab
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
            <div className={`f2 w-100 bb b--navy-40 mb4 ${className}`}>
                {list.map(element => {
                    return (
                        <div
                            key={element.id}
                            className={`dib pa3 pointer ${
                                element.id === active ? 'bw2 bb blue b--blue' : 'navy-80'
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
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    /** Set initial tab value. */
    initialTab: PropTypes.string.isRequired,
    /** Callback when clicking a tab. */
    onClick: PropTypes.func.isRequired,
    /** Append css classes to the tab. */
    className: PropTypes.string,
}

Tab.defaultProps = {
    className: '',
}

export default Tab
