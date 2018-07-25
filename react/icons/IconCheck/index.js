import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import Light from '@fortawesome/fontawesome-pro-light/faCheck'
import Regular from '@fortawesome/fontawesome-pro-regular/faCheck'

const families = {
  light: Light,
  regular: Regular
}

class IconCheck extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, family } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const icon = families[family]

    return <FontAwesome className={className} icon={icon} style={style} />
  }
}

IconCheck.propTypes = {
  /** Defines which font family will be used */
  family: PropTypes.oneOf(['light', 'regular']),
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  className: PropTypes.string,
}

IconCheck.defaultProps = {
  family: 'regular',
  ignoreSize: false,
  height: '16px',
  width: '16px',
  className: '',
}

export default IconCheck
