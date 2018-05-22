import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../../../icons/IconCloseAlt'

class Tag extends PureComponent {
  render() {
    const { count, onRemove, bgColor } = this.props
    const tagBgColor = bgColor ? `bg-${bgColor}` : 'bg-blue'
    let classes = `dib g-ph2 fw5 g-pv1 br2 ${tagBgColor} whiteg-f2 `
    if (onRemove) classes += 'hover-bg-red pointer'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center">
          {this.props.children}
          {count && <span className="g-ml2 g-ph2 bg-white br-pill g-f1 blue">{count}</span>}
          {onRemove && <IconClose className="g-ml2" ignoreSize />}
        </span>
      </span>
    )
  }
}

Tag.propTypes = {
  /** Shows a number counter at the end. */
  count: PropTypes.number,
  /** Function that will be called when user click to remove tag. */
  onRemove: PropTypes.func,
  /** Define Tag Color. */
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired
}

Tag.defaultProps = {
  count: null,
  onRemove: null
}

export default Tag
