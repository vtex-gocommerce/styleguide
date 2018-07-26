import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import Solid from '@fortawesome/fontawesome-pro-solid/faInfoCircle'
import Regular from '@fortawesome/fontawesome-pro-regular/faInfoCircle'
import Light from '@fortawesome/fontawesome-pro-light/faInfoCircle'

const families = {
  solid: Solid,
  regular: Regular,
  light: Light
}

class IconInfoCircle extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, family } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconInfoCircle.propTypes = {
  /** Defines which font family will be used */
  family: PropTypes.oneOf(['solid', 'regular', 'light']),
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string
}

IconInfoCircle.defaultProps = {
  family: 'solid',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: ''
}

export default IconInfoCircle
