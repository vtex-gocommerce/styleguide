import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlaceholderContainer from '../../DataLoading/PlaceholderContainer'

class Container extends PureComponent {
  static HR = () => <hr className="w-auto g-nh8 g-mv6 bw0 bg-base-4 c-on-base-4" style={{ height: 1 }} />

  render() {
    const { isPlaceholderActive, classNameArray, children } = this.props
    return (
      <div className="w-100 flex flex-column g-pv6 g-mv8 br2 ba b--base-4 bg-base-1 c-on-base-2 g-f3">
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
