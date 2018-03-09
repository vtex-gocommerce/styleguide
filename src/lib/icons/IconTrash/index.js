import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import iconSolid from '@fortawesome/fontawesome-pro-solid/faTrashAlt'
import iconRegular from '@fortawesome/fontawesome-pro-regular/faTrashAlt'
import iconLight from '@fortawesome/fontawesome-pro-light/faTrashAlt'

const styles = {
  solid: iconSolid,
  regular: iconRegular,
  light: iconLight
}

class IconTrash extends PureComponent {
  render() {
    const { className, fixedWidth, style } = this.props
    const icon = styles[style]

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconTrash.propTypes = {
  /** Defines which font style will be used */
  style: PropTypes.oneOf(['solid', 'regular', 'light']),
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string
}

IconTrash.defaultProps = {
  style: 'solid',
  fixedWidth: false,
  className: ''
}

export default IconTrash
