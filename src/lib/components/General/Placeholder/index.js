import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Placeholder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      loading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (!this.state.ready && !nextProps.isPlaceholderActive) {
      console.log(nextProps)
      this.setState(prevState => ({
        ...prevState,
        loading: true
      }))

      setTimeout(
        () =>
          this.setState(prevState => ({
            ready: true,
            loading: false
          })),
        500
      )
    }
  }

  render() {
    const { ready, loading } = this.state
    console.log(ready, loading)
    if (!ready && !loading) return <div className={`animated-background ${this.props.className}`} />
    if (!ready && loading)
      return (
        <div className={` ${this.props.className}`}>
          <div className=" fadeOut">
            <div className={` animated-background `} />
          </div>
        </div>
      )
    if (ready && !loading) return <div className="fadeIn">{this.props.children()}</div>

    return <span />
  }
}
//
Placeholder.propTypes = {
  /** Append css classes to the Input. */
  className: PropTypes.string,
  /** Show place holde */
  isPlaceholderActive: PropTypes.bool,
  /** Component Shown after the placeholde fades */
  children: PropTypes.node
}

export default Placeholder
