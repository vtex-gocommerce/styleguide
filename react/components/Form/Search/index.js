import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Select from '../Select'
import IconSearch from '../../../icons/IconSearch'
import IconTimesCircle from '../../../icons/IconTimesCircle'
import IconArc from '../../../icons/IconArc'

export const debounceTime = (milliseconds, fn) => {
  let timer
  return function() {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(context, args), milliseconds)
  }
}

class Search extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: this.props.searchValue,
      optionValue: this.props.optionValue
    }
  }

  handleChangeOption = event => {
    this.setState({ optionValue: event.target.value })
  }

  handleSearch = event => {
    this.setState({ searchValue: event.target.value })

    this.handleClickDebounce()
  }

  handleClearSearch = () => {
    this.setState({ searchValue: '' }, () => {
      this.handleClick()
    })
  }

  handlePressEnter = event => {
    if (event.key === 'Enter') this.handleClick()
  }

  handleClick = () => {
    const { searchValue, optionValue } = this.state
    const values = {
      searchValue,
      optionValue
    }

    this.props.onClick && this.props.onClick(values)
    this.props.onSubmit && this.props.onSubmit(values)
  }

  handleSubmit = () => {
    const { searchValue, optionValue } = this.state
    this.props.onSubmit && this.props.onSubmit({ searchValue, optionValue })
  }

  handleClickDebounce = debounceTime(600, this.handleClick)

  render() {
    const { placeholder, withOptions, options, name, id, size, nav, disabled, isLoading } = this.props

    const classes = !nav ? 'b--base-4 bg-white' : 'bg-base-inverted-5 bn c-on-base-inverted'
    const classesIcon = !nav ? 'gray' : 'c-base-inverted-3'

    return (
      <div
        className={`br2 ba flex flex-auto items-center overflow-hidden ${classes} ${size === 'small' ? " h-small" : " h-regular"} `}
      >
        {withOptions && (
          <Select
            placeholder="Select an option"
            name={name}
            id={id || name}
            list={options}
            elementClassName={`bn h-100 ${size === 'small' ? " h-small" : " h-regular"} `}
            className="h-100 br b--base-4 f6"
            onChange={this.handleChangeOption}
            value={this.state.optionValue}
            withoutStyle={nav}
            size="small"
          />
        )}

        <div className="flex flex-auto items-center w-100">
          <div className={`pl3 flex ${classesIcon}`} onClick={this.handleClick}>
            <IconSearch />
          </div>

          <Input
            disabled={disabled}
            placeholder={placeholder}
            className="bn w-100 f6"
            onChange={this.handleSearch}
            value={this.state.searchValue}
            withoutStyle={nav}
            onKeyPress={this.handlePressEnter}
          />

          {this.state.searchValue && !isLoading && (
            <div
              className={`pr3 flex pointer hover-c-primary animated fadeIn ${classesIcon}`}
              onClick={this.handleClearSearch}
            >
              <IconTimesCircle />
            </div>
          )}

          {isLoading && (
            <div
              className={`pr3 flex pointer hover-c-primary animated fadeIn ${classesIcon}`}
              onClick={this.handleClearSearch}
            >
              <IconArc />
            </div>
          )}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  /** Set input's name. */
  name: PropTypes.string,
  /** Set input's id. */
  id: PropTypes.string,
  /** Set placeholder for search input. */
  placeholder: PropTypes.string,
  /** Set value of search. */
  searchValue: PropTypes.string,
  /** Set if search is disabled. */
  disabled: PropTypes.bool,
  /** Set if search is loading. */
  isLoading: PropTypes.bool,
  /** Set option selected*/
  optionValue: PropTypes.string,
  /** Set if Search will have filter options. */
  withOptions: PropTypes.bool,
  /** Option list. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label of the option. */
      label: PropTypes.string.isRequired,
      /** Value of the option. */
      value: PropTypes.string.isRequired
    })
  ),
  /** Set function when clicking search button. Receive `values`. */
  onClick: PropTypes.func,
  /** Set function when clicking and changing input value (with debounce). */
  onSubmit: PropTypes.func,
  nav: PropTypes.bool,
  /** Size */
  size: PropTypes.oneOf(['small', 'default'])
}

Search.defaultProps = {
  placeholder: '',
  withOptions: false,
  disabled: false,
  options: [],
  searchValue: '',
  optionValue: '',
  size: 'default',
  nav: false,
  isLoading: false
}

export default Search
