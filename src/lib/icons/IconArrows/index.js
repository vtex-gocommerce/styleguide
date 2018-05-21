import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import iconSolid from '@fortawesome/fontawesome-pro-solid/faArrows'
import iconRegular from '@fortawesome/fontawesome-pro-regular/faArrows'
import iconLight from '@fortawesome/fontawesome-pro-light/faArrows'

const families = {
  solid: iconSolid,
  regular: iconRegular,
  light: iconLight
}

class IconArrows extends PureComponent {
  render() {
    const { className, ignoreSize, family, width, height } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconArrows.propTypes = {
  /** Defines which font family will be used */
  family: PropTypes.oneOf(['solid', 'regular', 'light']),
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string
}

IconArrows.defaultProps = {
  family: 'solid',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: ''
}

export default IconArrows
