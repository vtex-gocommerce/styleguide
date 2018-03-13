import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import ArrowUp from '@fortawesome/fontawesome-pro-regular/faArrowUp'
import ArrowRight from '@fortawesome/fontawesome-pro-regular/faArrowRight'
import ArrowDown from '@fortawesome/fontawesome-pro-regular/faArrowDown'
import ArrowLeft from '@fortawesome/fontawesome-pro-regular/faArrowLeft'

const sides = {
  up: ArrowUp,
  right: ArrowRight,
  down: ArrowDown,
  left: ArrowLeft,
}
class IconArrow extends PureComponent {
  render() {
    const { className, ignoreSize, side, width, height } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = sides[side]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconArrow.propTypes = {
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

IconArrow.defaultProps = {
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconArrow
