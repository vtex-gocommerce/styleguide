import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Avatar extends PureComponent {
  render() {
    const { size, img, letters, alt } = this.props
    const areaSize = `${size}px`
    const letterFontSize = `${(size / 2.25)}px`

    return img ? (
      <div className="cover bg-top br-100" style={{ width: areaSize, height: areaSize, backgroundImage: `url(${img})` }}></div>
    ) : (
      <div className="flex justify-center items-center br-100 bg-blue fw6 white" alt={alt} style={{ width: areaSize, height: areaSize, fontSize: letterFontSize }}>{letters}</div>
    )
  }
}

Avatar.propTypes = {
  /** Size of avatar in pixels. */
  size: PropTypes.number,
  /** URL for the avatar image. */
  img: PropTypes.string,
  /** Letters to show, recommended 2 letters. **Only show if no image is sent.** */
  letters: PropTypes.string,
  /** Alternative text for the image. */
  alt: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
  size: 36,
  img: null,
  letters: 'GC',
}

export default Avatar
