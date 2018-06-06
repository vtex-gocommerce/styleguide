import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconClose from '../../../icons/IconClose'

class Tag extends PureComponent {
  render() {
    const { onRemove } = this.props

    let classes = `${styles.gc_tag} dib g-pa2 br2 b--base-4 b--dashed fw4 g-f2 c-on-base-2 `
    if (onRemove) classes += 'hover-bg-base-2 pointer'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center">
          {this.props.children}
          {onRemove && <IconClose className="g-ml2" family="regular" ignoreSize />}
        </span>
      </span>
    )
  }
}

Tag.propTypes = {
  /** Function that will be called when user click to remove tag. */
  onRemove: PropTypes.func,
  children: PropTypes.node.isRequired
}

Tag.defaultProps = {
  onRemove: null
}

export default Tag
