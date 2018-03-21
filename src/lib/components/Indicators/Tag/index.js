import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../../../icons/IconCloseAlt'

class Tag extends PureComponent {
  render() {
    const { count, onRemove } = this.props
    let classes = 'dib ph2 fw5 pv1 br2 bg-blue white f2 '
    if (onRemove) classes += 'hover-bg-red pointer'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center">
          {this.props.children}
          {count && <span className="ml2 ph2 bg-white br-pill f1 blue">{count}</span>}
          {onRemove && <IconClose className="ml2" ignoreSize />}
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
  children: PropTypes.node.isRequired,
}

Tag.defaultProps = {
  count: null,
  onRemove: null,
}

export default Tag
