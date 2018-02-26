import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconClose from '../../icons/IconCloseAlt'

class Tag extends Component {
  render() {
    const { count, onRemove } = this.props
    let classes = 'ph2 fw5 pv1 br2 bg-blue white f2 '

    classes += onRemove ? 'hover-bg-red pointer' : ''

    return (
      <span className={classes} onClick={onRemove}>
        {this.props.children}
        <span className="v-base">
          {count && <span className="ml2 ph2 bg-white br-pill f1 blue">{count}</span>}
          {onRemove && <IconClose className="ml2" />}
        </span>
      </span>
    )
  }
}

Tag.propTypes = {
  /** Shows a integer as counter in the context. */
  count: PropTypes.number,
  /** Function that will be called when user click to remove tag. */
  onRemove: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Tag.defaultProps = {}

export default Tag
