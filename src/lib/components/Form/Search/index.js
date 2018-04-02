import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Select from '../Select'
import IconSearch from '../../../icons/IconSearch'

class Search extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      optionValue: '',
    }
  }

  handleChangeOption = (event) => {
    this.setState({ optionValue: event.target.value })
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  handleClick = () => {
    const { searchValue, optionValue } = this.state
    const values = {
      searchValue,
      optionValue,
    }

    this.props.onClick && this.props.onClick(values)
  }

  render() {
    const { placeholder, withOptions, options } = this.props

    return (
      <div className="ba b--navy-40 flex flex-auto items-center h11">
        {withOptions && (
          <Select placeholder="Select an option"
            list={options}
            elementClassName="bn h-100"
            className="h-100 br b--navy-40"
            onChange={this.handleChangeOption} />
        )}
        <div className="flex flex-auto items-center h-100">
          <Input
            placeholder={placeholder}
            className="bn w-100 h-100"
            onBlue={this.handleSearch}
            onChange={this.handleSearch} />
          <div className="pa3 pointer blue hover-navy" onClick={this.handleClick}>
            <IconSearch />
          </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  /** Set placeholder for search input. */
  placeholder: PropTypes.string,
  /** Set if Search will have filter options. */
  withOptions: PropTypes.bool,
  /** Option list. */
  options: PropTypes.arrayOf(PropTypes.shape({
    /** Label of the option. */
    label: PropTypes.string.isRequired,
    /** Value of the option. */
    value: PropTypes.string.isRequired,
  })),
  /** Set function when clicking search button. Receive `values`. */
  onClick: PropTypes.func,
}

Search.defaultProps = {
  placeholder: 'Search...',
  withOptions: false,
  options: [],
}

export default Search
