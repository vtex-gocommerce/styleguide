import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../../../icons/IconCloseAlt'

class Label extends PureComponent {
  render() {
    const { count, onRemove, bgColor } = this.props
    const tagBgColor = bgColor ? `bg-${bgColor}` : 'bg-primary'
    let classes = `dib g-ph2 fw5 g-pv1 br2 ${tagBgColor} white g-f2 `
    if (onRemove) classes += 'hover-bg-danger pointer'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center">
          {this.props.children}
          {count && <span className="g-ml2 g-ph2 bg-base-1 br-pill g-f1 c-primary">{count}</span>}
          {onRemove && <IconClose className="g-ml2" ignoreSize />}
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
  children: PropTypes.node.isRequired
}

Label.defaultProps = {
  count: null,
  onRemove: null
}

export default Label
