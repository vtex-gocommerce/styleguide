import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faPlusCircle'

class IconAdd extends PureComponent {
  render() {
    const { className, fixedWidth, width, height } = this.props
    const style = { width: width, height: height }

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} style={style} />
  }
}

IconAdd.propTypes = {
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string.isRequired,
  /** Define height of the icon. */
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
}

IconAdd.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconAdd
