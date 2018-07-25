import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import IconCheck from '../../../icons/IconCheck'

class LoadingCircle extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hide: false,
      hideEffect: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.hideOnFinish && nextProps.current == 100) {
      window.setTimeout(() => {
        this.setState({
          hideEffect: true
        })
      }, 2000)
      window.setTimeout(() => {
        this.setState({
          hide: true
        })
      }, 3000)
    } else {
      this.setState({
        hideEffect: false,
        hide: false
      })
    }
  }

  render() {
    const { current, className, width, hideOnFinish } = this.props
    const percent = 339.292 * (1 - current / 100)

    const checkWidth = (parseInt(width) * 60) / 100 + 'px'

    return (
      <div className={`${styles.gc_loading_circle} ${className} w-auto relative ${this.state.hide ? 'dn' : 'dib'}`}>
        <svg
          className={`${
            !this.state.hideEffect ? styles.gc_loading_circle__progress : styles.gc_loading_circle__progress__finish
          }`}
          viewBox="0 0 120 120"
          style={{ width: width, height: width }}
        >
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" strokeWidth="4" />
          <circle
            className={styles.gc_loading_circle__progress__value}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#3DA3C3"
            strokeWidth="4"
            strokeDashoffset={percent}
          />
        </svg>
        <div
          className={`${
            !this.state.hideEffect ? styles.gc_loading_circle__check : styles.gc_loading_circle__check__finish
          }`}
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
  width: PropTypes.string,
  hideOnFinish: PropTypes.bool
}

LoadingCircle.defaultProps = {
  current: 0,
  className: '',
  width: '50px',
  hideOnFinish: false
}

export default LoadingCircle
