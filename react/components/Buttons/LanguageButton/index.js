import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BooleanValue } from 'react-values'
import IconEarth from '../../../icons/IconEarth'
import IconCaret from '../../../icons/IconCaret'

class LanguageButton extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      localeSelected: this.findLocale(props.localeSelected)
    }
  }

  findLocale = locale => {
    const localeObj = this.props.locales.find(({ id }) => id.split('-')[0] === locale.split('-')[0])
    return localeObj ? localeObj : locales[0]
  }

  handleClick = locale => {
    this.setState({
      localeSelected: this.findLocale(locale)
    })

    this.props.onClick && this.props.onClick(locale)
  }

  render() {
    const { locales, className, itemClassName } = this.props
    const { localeSelected } = this.state

    return (
      <BooleanValue defaultValue={false}>
        {({ value, toggle }) => (
          <div className={`w-100 relative`}>
            <div className={`flex items-center pointer g-f2 fw6 c-on-base-2 ${className}`} onClick={toggle}>
              <IconEarth className="g-mr3" />
              <span className="g-mr3">{localeSelected.text}</span>
              <IconCaret side={`${value ? 'up' : 'down'}`} width="16" height="16" className="ml-auto" />
            </div>
            {value && (
              <div className={`w-100 g-pt1`}>
                {locales.map(({ id, text }) =>
                  id !== localeSelected.id ? (
                    <div
                      key={id}
                      id={`appframe-locale@${id}`}
                      className={`flex items-center g-pv1 g-f2 c-on-base-2 pointer ${itemClassName}`}
                      onClick={() => {
                        this.handleClick(id), toggle()
                      }}
                    >
                      <span className="g-pl7">{text}</span>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
        )}
      </BooleanValue>
    )
  }
}

LanguageButton.propTypes = {
  onClick: PropTypes.func,
  localeSelected: PropTypes.string,
  locales: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string
    })
  ),
  className: PropTypes.string,
  itemClassName: PropTypes.string
}

LanguageButton.defaultProps = {
  className: '',
  itemClassName: '',
  onClick: () => {},
  localeSelected: '',
  locales: []
}

export default LanguageButton
