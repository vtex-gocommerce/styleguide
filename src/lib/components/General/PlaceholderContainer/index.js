import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Placeholder from './../Placeholder'
import './styles.css'

function placeholderFunc(classNameArray) {
  return classNameArray.map((className, index) => {
    if (!Array.isArray(className)) {
      return <Placeholder key={index + className} className={className} isPlaceholderActive />
    }

    return <div className="flex">{placeholderFunc(className)}</div>
  })
}

const placeholderFadeOut = classNameArray => {
  return classNameArray.map((className, index) => (
    <div key={index + className} className={`fadeOut `}>
      <Placeholder className={className} isPlaceholderActive />
    </div>
  ))
}

class PlaceholderContainer extends PureComponent {
  render() {
    return this.props.isPlaceholderActive ? (
      <div>{placeholderFunc(this.props.classNameArray)}</div>
    ) : (
      <div className="fadeIn flex flex-column flex-auto">{this.props.children()}</div>
    )
  }
}

PlaceholderContainer.propTypes = {
  /** Append css classes to the Input. each element in the array represent a placeholder */
  classNameArray: PropTypes.array.isRequired,
  /** Show place holde */
  isPlaceholderActive: PropTypes.bool,
  /** Component Shown after the placeholde fades */
  children: PropTypes.func
}

export default PlaceholderContainer
