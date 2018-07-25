import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import Light from '@fortawesome/fontawesome-pro-light/faBox'
import Regular from '@fortawesome/fontawesome-pro-regular/faBox'
import Solid from '@fortawesome/fontawesome-pro-solid/faBox'

const families = {
  light: Light,
  solid: Solid,
  regular: Regular
}

class IconBox extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, family } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconBox.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string
}

IconBox.defaultProps = {
  family: 'regular',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: ''
}

export default IconBox
