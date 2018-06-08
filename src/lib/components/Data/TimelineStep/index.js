import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class TimelineStep extends PureComponent {
  render() {
    const { icon, datetime, bgColor } = this.props
    const Icon = props => icon

    return (
      <div className="cf relative">
        <div className={styles.date}>{datetime}</div>
        <div className={`flex justify-center items-center ${styles.icon} bg-${bgColor}`}>
          <Icon />
        </div>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    )
  }
}

TimelineStep.propTypes = {
  datetime: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired
}

TimelineStep.defaultProps = {
  bgColor: 'info'
}

export default TimelineStep
