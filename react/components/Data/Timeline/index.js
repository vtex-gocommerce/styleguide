import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Timeline extends PureComponent {
    render() {
        return (
            <div className={styles.timeline}>
                {this.props.children}
            </div>
        )
    }
}

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Timeline