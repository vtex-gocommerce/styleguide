import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Badge extends PureComponent {
  getBadgeFontSize = value => {
    return Math.max(12, Math.min(22, value / 2.25))
  }

  render() {
    const { count, outline, icon, size, color } = this.props
    const badgeColor = color ? color : 'danger'
    const Icon = props => icon
    const areaSize = `${size}px`
    const badgeFontSize = this.getBadgeFontSize(size)

    let classes = 'ba bw1 br-pill fw5 '
    classes += outline ? `bg-white c-${badgeColor} b--${badgeColor} ` : `bg-${badgeColor} white b--${badgeColor} `
    classes += icon ? 'absolute' : 'g-ph2'

    const badge = (
      <span className={classes} style={{ fontSize: badgeFontSize }}>
        {count}
      </span>
    )

    return icon ? (
      <div className={`${styles.badgeBox} dib g-f5 c-primary`} style={{ width: areaSize, height: areaSize }}>
        {badge}
        <Icon />
      </div>
    ) : (
      badge
    )
  }
}

Badge.propTypes = {
  /** Shows the counter number inside the badge. */
  count: PropTypes.number.isRequired,
  /** Shows a integer as counter in the context. */
  outline: PropTypes.bool,
  /** Applies a badge to an Icon */
  icon: PropTypes.element,
  /** Size of the badge when using icons. */
  size: PropTypes.number,
  /** Define Badge Color. */
  color: PropTypes.string
}

Badge.defaultProps = {
  outline: false,
  icon: null,
  size: 24
}

export default Badge
