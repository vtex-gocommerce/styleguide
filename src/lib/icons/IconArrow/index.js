import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import CaretUp from '@fortawesome/fontawesome-pro-regular/faArrowUp'
import CaretRight from '@fortawesome/fontawesome-pro-regular/faArrowRight'
import CaretDown from '@fortawesome/fontawesome-pro-regular/faArrowDown'
import CaretLeft from '@fortawesome/fontawesome-pro-regular/faArrowLeft'

class IconArrow extends Component {
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

IconArrow.propTypes = {
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconArrow.defaultProps = {
  side: 'right',
  fixedWidth: false,
  className: '',
}

export default IconArrow
