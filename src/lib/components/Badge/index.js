import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Badge extends PureComponent {
  render() {
    const { count, outline, icon } = this.props
    const Icon = (props) => (icon)

    let classes = 'ba bw1 b--red br-pill fw5 f1 '
    classes += outline ? 'bg-transparent red ' : 'bg-red white '
    classes += icon ? 'absolute' : 'ph2 pv f2'

    const badge = <span className={classes}>{count}</span>

    return icon ? (
      <span className={`${styles.badgeBox} relative blue`}>
        {badge}
        <Icon />
      </span>
    ) : badge
  }
}

Badge.propTypes = {
  /** Shows the counter number inside the badge. */
  count: PropTypes.number.isRequired,
  /** Shows a integer as counter in the context. */
  outline: PropTypes.bool,
  /** Applies a badge to an Icon */
  icon: PropTypes.element,
}

Badge.defaultProps = {
  outline: false,
  icon: null,
}

export default Badge
