import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconTimesCircle from '../../../icons/IconTimesCircle'

const styleClasses = {
  default: 'bg-white b--on-base-2',
  primary: 'bg-primary-light b--primary',
  danger: 'bg-danger-light b--danger',
  warning: 'bg-warning-light b--warning',
  success: 'bg-success-light b--success'
}

const buttonCloseStyleHover = {
  default: 'hover-c-primary',
  primary: 'hover-c-primary',
  danger: 'hover-c-danger',
  warning: 'hover-c-warning',
  success: 'hover-c-success'
}

class Tag extends PureComponent {
  render() {
    const { onRemove, style, id } = this.props

    let tagStyleClasses = styleClasses[style]

    let classes = `${styles.gc_tag} ${tagStyleClasses} f6 dib ph4 mr2 h-small ba br2 c-on-base-2 b--dashed flex justify-center items-center `
    if (onRemove) classes += 'pointer'

    return (
      <span className={classes} id={id}>
        <span className="flex items-center">
          {this.props.children}
          {onRemove && (
            <span className={buttonCloseStyleHover[style]} onClick={onRemove}>
              <IconTimesCircle className="ml2" family="regular" height="18px" width="18px" />
            </span>
          )}
        </span>
      </span>
    )
  }
}

Tag.propTypes = {
  id: PropTypes.string,
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
