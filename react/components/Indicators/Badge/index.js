import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Badge extends PureComponent {
  getBadgeFontSize = value => {
    return Math.max(12, Math.min(22, value / 2.25))
  }

  handleClick = event => {
    this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { text, outline, icon, size, color } = this.props
    const badgeColor = color ? color : 'danger'
    const Icon = props => icon
    const areaSizeHeight = size === 'default' ? '23px' : '19px'
    const areaSizeWidth = size === 'default' ? '29px' : '25px'
    const badgeFontSize = '10px'

    let classes = "ba bw1 br-pill fw6 f7 "
    classes += outline ? `bg-white c-${badgeColor} b--${badgeColor} ` : `bg-${badgeColor} white b--${badgeColor} `
    classes += icon ? 'absolute' : "ph2"

    const badge = (
      <span className={classes} style={{ fontSize: badgeFontSize }}>
        {text}
      </span>
    )

    return icon ? (
      <div
        className={`${styles.badgeBox} c-primary`}
        style={{ height: areaSizeHeight, width: areaSizeWidth }}
        onClick={this.handleClick}
      >
        {badge}
        <Icon />
      </div>
    ) : (
      badge
    )
  }
}

Badge.propTypes = {
  /** Shows the text inside the badge. */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Shows text in the context. */
  outline: PropTypes.bool,
  /** Applies a badge to an Icon */
  icon: PropTypes.element,
  /** Size of the badge when using icons. */
  size: PropTypes.oneOf(['small', 'default']),
  /** Define Badge Color. */
  color: PropTypes.string,
  /** Function that will be called when user click on badge. */
  onClick: PropTypes.func
}

Badge.defaultProps = {
  outline: false,
  icon: null,
  size: 'default',
  onClick: null
}

export default Badge
