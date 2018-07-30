import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlaceholderContainer from './../../DataLoading/PlaceholderContainer/index'

class Container extends PureComponent {
  render() {
    const { isPlaceholderActive, classNameArray, children } = this.props
    return (
      <div className="w-100 flex flex-column g-pv6 g-mv8 ba b--base-3 bg-base-1 c-on-base-2 g-f3">
        <div className="g-ph8">
          <PlaceholderContainer isPlaceholderActive={isPlaceholderActive} classNameArray={classNameArray}>
            {() => children}
          </PlaceholderContainer>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  /** enable placeholder in Container */
  isPlaceholderActive: PropTypes.bool.isRequired,
  /** Show or hide the close icon */
  classNameArray: PropTypes.array,
  children: PropTypes.node
}

Container.defaultProps = {
  isPlaceholderActive: false,
  classNameArray: [
    ['g-h8 w-30 g-mb7'],
    ['g-h4 w-30 g-mb5'],
    ['g-h10 w-80 g-mb5'],
    ['g-h4 w-30 g-mb5'],
    ['g-h10 w-80 g-mb5'],
    ['g-h4 w-30 g-mb5'],
    ['g-h10 w-80 g-mb5']
  ]
}

export default Container
