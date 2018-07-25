import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import Light from '@fortawesome/fontawesome-pro-light/faShoppingBasket'
import Regular from '@fortawesome/fontawesome-pro-regular/faShoppingBasket'
import Solid from '@fortawesome/fontawesome-pro-solid/faShoppingBasket'

const families = {
  light: Light,
  solid: Solid,
  regular: Regular
}

class IconShoppingBasket extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, family } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconShoppingBasket.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string
}

IconShoppingBasket.defaultProps = {
  family: 'regular',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: ''
}

export default IconShoppingBasket
