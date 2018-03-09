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
    const { className, fixedWidth, side } = this.props
    const icon = sides[side]

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconArrow.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']).isRequired,
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconArrow.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconArrow
