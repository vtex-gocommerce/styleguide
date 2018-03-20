import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

const backgrounds = {
    'success': 'bg-green',
    'warning': 'bg-yellow',
    'danger': 'bg-red',
    'info': 'bg-blue',
}

class TimelineHistory extends PureComponent {
    render() {
        const { icon, datetime, content, status } = this.props
        const Icon = (props) => (icon)

        return (
            <div className='cf relative'>
                <div className={styles.date}>{datetime}</div>
                <div className={`flex justify-center items-center ${styles.icon} ${backgrounds[status]}`}><Icon /></div>
                <div className={styles.content}>{this.props.children}</div>
            </div>
        )
    }
}

TimelineHistory.propTypes = {
    datetime: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
    icon: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
}

TimelineHistory.defaultProps = {
    status: 'info'
}

export default TimelineHistory;