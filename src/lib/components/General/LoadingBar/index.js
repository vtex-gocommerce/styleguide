import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class LoadingBar extends PureComponent {
    render() {
        const { current, showLabel } = this.props

        return (
            <div className={`h3 br-pill bg-navy-40 ${showLabel && 'mt8'}`}>
                <div className="relative h3 br-pill bg-blue" style={{ width: `${current}%` }}>
                    {showLabel && (
                        <span className="absolute bottom-1 right-0 fw6 blue">{current}%</span>
                    )}
                </div>
            </div>
        )
    }
}

LoadingBar.propTypes = {
    /** Current percent value. */
    current: PropTypes.number,
    /** Hide percentage label. */
    hideLabel: PropTypes.bool
}

LoadingBar.defaultProps = {
    current: 0,
    showLabel: false
}

export default LoadingBar