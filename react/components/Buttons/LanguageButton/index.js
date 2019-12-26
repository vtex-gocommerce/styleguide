import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BooleanValue } from 'react-values'
import IconEarth from '../../../icons/IconEarth'
import IconSortDown from '../../../icons/IconSortDown'
import IconSortUp from '../../../icons/IconSortUp'

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
    const { locales, className, itemClassName, abbreviationOn } = this.props
    const { localeSelected } = this.state
    
    return (
      <BooleanValue defaultValue={false}>
        {({ value, toggle }) => (
          <div className={`w-100 relative`}>
            <div className={`flex flex-auto pointer g-f2 fw6 c-on-base-2 ${className}`} onClick={toggle}>
              <IconEarth className="flex flex-start" />
              <span className="flex flex-auto mh3">{abbreviationOn ? localeSelected.shortText : localeSelected.text}</span>
              {value ? (
                <IconSortUp width="16" height="16" className="flex flex-end" />
              ) : (
                  <IconSortDown width="16" height="16" className="flex flex-end" />
                )}
            </div>
            {value && (
              <div className={`w-100 g-pv1`}>
                {locales.map(({ id, text, shortText }) =>
                  id !== localeSelected.id ? (
                    <div
                      key={id}
                      id={`appframe-locale@${id}`}
                      className={`g-ph4 g-pv1 g-f2 c-on-base-2 pointer ${itemClassName} ${abbreviationOn ? 'tc' : 'ml6'}`}
                      onClick={() => {
                        this.handleClick(id), toggle()
                      }}
                    >
                      <span>{abbreviationOn ? shortText : text}</span>
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
  itemClassName: PropTypes.string,
  abbreviationOn: PropTypes.bool
}

LanguageButton.defaultProps = {
  className: '',
  itemClassName: '',
  onClick: () => { },
  localeSelected: '',
  locales: [],
  abbreviationOn: false
}

export default LanguageButton
