import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import icon from '@fortawesome/fontawesome-pro-regular/faShoppingCart'

class IconCart extends PureComponent {
  render() {
    const { className, fixedWidth } = this.props

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconCart.propTypes = {
  /** Used a fixed width on icon. */
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
}

IconCart.defaultProps = {
  fixedWidth: false,
  className: '',
}

export default IconCart
