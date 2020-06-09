import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconTimes from '../../../icons/IconTimes'

class Label extends PureComponent {
  render() {
    const { count, onRemove, bgColor, fullWidth } = this.props
    const tagBgColor = bgColor ? `bg-${bgColor}` : 'bg-blue'
    let classes = `dib ph2 fw6 pv1 br2 ${tagBgColor} white f6 `
    if (fullWidth) classes += ' w-100 '
    if (onRemove) classes += 'hover-bg-danger pointer'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center justify-center">
          {this.props.children}
          {count && <span className="ml2 ph2 bg-white br-pill f7 c-primary">{count}</span>}
          {onRemove && <IconTimes className="ml2" ignoreSize />}
        </span>
      </span>
    )
  }
}

Label.propTypes = {
  /** Shows a number counter at the end. */
  count: PropTypes.number,
  /** Function that will be called when user click to remove tag. */
  onRemove: PropTypes.func,
  /** Define Tag Color. */
  bgColor: PropTypes.string,
  /** Make Label full width. */
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Label.defaultProps = {
  count: null,
  onRemove: null,
  fullWidth: false
}

export default Label
