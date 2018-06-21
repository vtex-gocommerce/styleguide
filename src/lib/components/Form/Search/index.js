import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Select from '../Select'
import IconSearch from '../../../icons/IconSearch'

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
  }

  handleClick = () => {
    const { searchValue, optionValue } = this.state
    const values = {
      searchValue,
      optionValue
    }

    this.props.onClick && this.props.onClick(values)
  }

  render() {
    const { placeholder, withOptions, options, name, size, nav } = this.props

    const classes = !nav ? "b--base-4 bg-white" : "bg-base-inverted-5 bn c-on-base-inverted"
    const classesIcon = !nav ? "c-on-base-2" : "c-base-inverted-3"

    return (
      <div className={`br2 ba flex flex-auto items-center overflow-hidden ${classes} ${size === 'small' ? ' g-h8' : ' g-h10'} `}>
        {withOptions && (
          <Select
            placeholder="Select an option"
            name={name}
            list={options}
            elementClassName={`bn h-100 ${size === 'small' ? ' g-h8' : ' g-h10'} `}
            className="h-100 br b--base-4"
            onChange={this.handleChangeOption}
            value={this.state.optionValue}
            withoutStyle={nav}
            size="small"
          />

        )}
        <div className="flex flex-auto items-center w-100">
          <div className={`g-pl3 pointer hover-c-primary ${classesIcon}`} onClick={this.handleClick}>
            <IconSearch />
          </div>

          <Input
            placeholder={placeholder}
            className="bn w-100 w-100"
            onBlue={this.handleSearch}
            onChange={this.handleSearch}
            value={this.state.searchValue}
            withoutStyle={nav}
          />

        </div>
      </div>
    )
  }
}

Search.propTypes = {
  /** Set input's name. */
  name: PropTypes.string,
  /** Set placeholder for search input. */
  placeholder: PropTypes.string,
  /** Set value of search. */
  searchValue: PropTypes.string,
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
  nav: PropTypes.bool,
  /** Size */
  size: PropTypes.oneOf(['small', 'default'])
}

Search.defaultProps = {
  placeholder: 'Search...',
  withOptions: false,
  options: [],
  searchValue: '',
  optionValue: '',
  size: "default",
  nav: false
}

export default Search
