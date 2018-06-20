import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class LoadingCircle extends PureComponent {
  render() {
    const { current, className, width } = this.props
    const percent = 339.292 * (1 - current / 100)

    const checkWidth = (parseInt(width) * 60) / 100 + 'px'

    return (
      <div class={`dib ${styles.gc_loading_circle} ${className} w-auto h-100 relative`}>
        <svg class={styles.gc_loading_circle__progress} viewBox="0 0 120 120" style={{ width: width, height: width }}>
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" />
          <circle
            class={styles.gc_loading_circle__progress__value}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#3DA3C3"
            stroke-width="4"
            stroke-dashoffset={percent}
          />
        </svg>
        <div
          className={`${styles.gc_loading_circle__check}`}
          style={{ display: current == 100 ? 'block' : 'none', color: '#3DA3C3' }}
        >
          <IconCheck width={checkWidth} height={checkWidth} />
        </div>
      </div>
    )
  }
}

LoadingCircle.propTypes = {
  /** Current percent value. */
  current: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.string
}

LoadingCircle.defaultProps = {
  current: 0,
  className: '',
  width: '50px'
}

export default LoadingCircle
