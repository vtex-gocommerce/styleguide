import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BooleanValue } from 'react-values'
import onClickOutside from 'react-onclickoutside'
import IconEarth from '../../../icons/IconEarth'
import IconSortDown from '../../../icons/IconSortDown'
import IconSortUp from '../../../icons/IconSortUp'

class LanguageButtonComponent extends PureComponent {
  handleClickOutside = (event) => {
    this.props.closeDropdown()
  }
  render() {
    const {
      className,
      abbreviationOn,
      localeSelected,
      locales,
      itemClassName,
      handleClick,
      isDropdownOpen,
      toggleDropdown,
      closeDropdown,
      enableOnClickOutside,
      disableOnClickOutside
    } = this.props
    if (isDropdownOpen) {
      enableOnClickOutside()
    } else {
      disableOnClickOutside()
    }
    return (
      <div className={`w-100 relative`}>
        <div className={`flex flex-auto pointer f6 fw6 gray ${className}`} onClick={toggleDropdown}>
          <IconEarth className="flex flex-start" />
          <span className="flex flex-auto mh3">{abbreviationOn ? localeSelected.shortText : localeSelected.text}</span>
          {isDropdownOpen ? (
            <IconSortUp width="16" height="16" className="flex flex-end" />
          ) : (
            <IconSortDown width="16" height="16" className="flex flex-end" />
          )}
        </div>
        {isDropdownOpen && (
          <div className={`w-100 pv1`}>
            {locales.map(({ id, text, shortText }) =>
              id !== localeSelected.id ? (
                <div
                  key={id}
                  id={`appframe-locale@${id}`}
                  className={`ph4 pv1 f6 gray pointer ${itemClassName} ${abbreviationOn ? 'tc' : 'ml6'}`}
                  onClick={() => {
                    handleClick(id), toggleDropdown()
                  }}
                >
                  <span>{abbreviationOn ? shortText : text}</span>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    )
  }
}
const LanguageButtonComponentWrapper = onClickOutside(LanguageButtonComponent)

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
    return (
      <BooleanValue defaultValue={false}>
        {({ value, toggle, clear }) => (
          <LanguageButtonComponentWrapper
            {...this.props}
            localeSelected={this.state.localeSelected}
            handleClick={this.handleClick}
            findLocale={this.findLocale}
            isDropdownOpen={value}
            toggleDropdown={toggle}
            closeDropdown={clear}
          />
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
