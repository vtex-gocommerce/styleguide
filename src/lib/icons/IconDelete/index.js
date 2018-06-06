import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import Solid from '@fortawesome/fontawesome-pro-solid/faTrashAlt'
import Regular from '@fortawesome/fontawesome-pro-regular/faTrashAlt'

const families = {
  solid: Solid,
  regular: Regular
}

class IconDelete extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, family } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconDelete.propTypes = {
  /** Defines which font family will be used */
  family: PropTypes.oneOf(['solid', 'regular']),
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string
}

IconDelete.defaultProps = {
  family: 'solid',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: ''
}

export default IconDelete
