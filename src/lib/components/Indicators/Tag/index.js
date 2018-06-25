import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconClose from '../../../icons/IconClose'

class Tag extends PureComponent {
  render() {
    const { onRemove } = this.props

    let classes = `${styles.gc_tag} g-f2 g-t5 dib g-ph4 g-mr1 g-h10 ba br2 c-on-base-2 b--on-base-2 b--dashed flex justify-center items-center `
    if (onRemove) classes += 'hover-bg-base-2 pointer hover-bg-base-3 hover-b--base-3'

    return (
      <span className={classes} onClick={onRemove}>
        <span className="flex items-center">
          {this.props.children}
          {onRemove && <IconClose className="g-ml2" family="regular" height={18} width={18} />}
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
