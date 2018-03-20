import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Tooltip as Tippy } from 'react-tippy'
import './tooltip.css'

class Tooltip extends PureComponent {
    render() {
        const { content, side, follow, size, trigger, isDisabled, interactive } = this.props

        return (
            <Tippy
                theme='transparent'
                html={content}
                position={side}
                followCursor={follow}
                size={size}
                trigger={trigger}
                disabled={isDisabled}
                interactive={interactive}
            >
                {this.props.children}
            </Tippy>
        )
    }
}

Tooltip.propTypes = {
    /** Shows a number counter at the end. */
    content: PropTypes.element,
    /** Side of tooltip. */
    side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /** Makes tooltip follow cursor. */
    follow: PropTypes.bool,
    /** Define the size of tooltip */
    size: PropTypes.oneOf(['small', 'regular', 'big']),
    /** Tooltip trigger action. */
    trigger: PropTypes.oneOf(['mouseenter', 'click']),
    /** Makes tooltip not show. */
    isDisabled: PropTypes.bool,
    /** Makes tooltip interactive. */
    interactive: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

Tooltip.defaultProps = {
    content: '',
    side: 'top',
    follow: false,
    size: 'regular',
    trigger: 'mouseenter',
    interactive: false
}

export default Tooltip