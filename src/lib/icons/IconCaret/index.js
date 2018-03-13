import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import CaretUp from '@fortawesome/fontawesome-pro-solid/faCaretUp'
import CaretRight from '@fortawesome/fontawesome-pro-solid/faCaretRight'
import CaretDown from '@fortawesome/fontawesome-pro-solid/faCaretDown'
import CaretLeft from '@fortawesome/fontawesome-pro-solid/faCaretLeft'

const sides = {
  up: CaretUp,
  right: CaretRight,
  down: CaretDown,
  left: CaretLeft,
}

class IconCaret extends PureComponent {
  render() {
    const { className, ignoreSize, side, width, height } = this.props
    const icon = sides[side]
    const style = !ignoreSize ? { width: width, height: height } : {}

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconCaret.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconCaret.defaultProps = {
  side: 'right',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconCaret
