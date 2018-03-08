import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../../icons/IconCloseAlt'
import styles from './style.css'

class Badge extends Component {
  render() {
    const { outline, icon } = this.props
    const Icon = (props) => (icon)

    let content
    let classes = 'ba bw1 b--red br-pill fw5 f1 '

    if (outline) {
      classes += 'bg-transparent red '
    } else {
      classes += 'bg-red white '
    }


    if (icon) {
      classes += 'absolute'
      content = (
        <span className={`${styles.badgeBox} relative blue`}>
          <span className={classes}>{this.props.children}</span>
          <Icon />
        </span>
      )
    } else {
      classes += 'ph2 pv f2'
      content = <span className={classes}>{this.props.children}</span>
    }

    return content
  }
}

Badge.propTypes = {
  /** Shows a integer as counter in the context. */
  outline: PropTypes.bool,
  /** Applies a badge to an Icon */
  icon: PropTypes.element,
  children: PropTypes.node.isRequired,
}

Badge.defaultProps = {
  outline: false,
}

export default Badge
