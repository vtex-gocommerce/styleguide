import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import AngleUp from '@fortawesome/fontawesome-pro-regular/faAngleUp'
import AngleRight from '@fortawesome/fontawesome-pro-regular/faAngleRight'
import AngleDown from '@fortawesome/fontawesome-pro-regular/faAngleDown'
import AngleLeft from '@fortawesome/fontawesome-pro-regular/faAngleLeft'

const sides = {
  up: AngleUp,
  right: AngleRight,
  down: AngleDown,
  left: AngleLeft,
}
class IconAngle extends PureComponent {
  render() {
    const { className, ignoreSize, side, width, height } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = sides[side]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconAngle.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']).isRequired,
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconAngle.defaultProps = {
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconAngle
