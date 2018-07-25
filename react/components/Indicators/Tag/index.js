import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconClose from '../../../icons/IconClose'

const styleClasses = {
  default: 'bg-white b--on-base-2',
  primary: 'bg-primary-light b--primary',
  danger: 'bg-danger-light b--danger',
  warning: 'bg-warning-light b--warning',
  success: 'bg-success-light b--success'
}

class Tag extends PureComponent {
  render() {
    const { onRemove, style } = this.props

    let tagStyleClasses = styleClasses[style]

    let classes = `${
      styles.gc_tag
    } ${tagStyleClasses} g-f2 g-t5 dib g-ph4 g-mr1 g-h10 ba br2 c-on-base-2 b--dashed flex justify-center items-center `
    if (onRemove) classes += 'hover-bg-base-2 pointer hover-bg-base-3 hover-b--base-3'

    return (
      <span className={classes}>
        <span className="flex items-center">
          {this.props.children}
          {onRemove && (
            <span onClick={onRemove}>
              <IconClose className="g-ml2" family="regular" height="18px" width="18px" />
            </span>
          )}
        </span>
      </span>
    )
  }
}

Tag.propTypes = {
  /** Function that will be called when user click to remove tag. */
  onRemove: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(['default', 'primary', 'danger', 'warning', 'success'])
}

Tag.defaultProps = {
  onRemove: null,
  style: 'default'
}

export default Tag
