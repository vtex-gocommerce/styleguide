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
    const { className, fixedWidth, side } = this.props
    const icon = sides[side]

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconCaret.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconCaret.defaultProps = {
  side: 'right',
  fixedWidth: false,
  className: '',
}

export default IconCaret
