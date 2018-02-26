import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import CaretUp from '@fortawesome/fontawesome-pro-solid/faCaretUp'
import CaretRight from '@fortawesome/fontawesome-pro-solid/faCaretRight'
import CaretDown from '@fortawesome/fontawesome-pro-solid/faCaretDown'
import CaretLeft from '@fortawesome/fontawesome-pro-solid/faCaretLeft'

class IconCaret extends Component {
  render() {
    const { className, fixedWidth, side } = this.props

    let icon

    switch (side) {
      default:
      case 'up':
        icon = CaretUp
        break
      case 'right':
        icon = CaretRight
        break
      case 'down':
        icon = CaretDown
        break
      case 'left':
        icon = CaretLeft
        break
    }

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconCaret.propTypes = {
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconCaret.defaultProps = {
  side: 'right',
  fixedWidth: false,
  className: '',
}

export default IconCaret
