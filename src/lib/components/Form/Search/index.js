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
      optionValue: ''
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
    const { placeholder, withOptions, options, name } = this.props

    return (
      <div className="ba b--base-4 flex flex-auto items-center g-h11">
        {withOptions && (
          <Select
            placeholder="Select an option"
            name={name}
            list={options}
            elementClassName="bn h-100"
            className="h-100 br b--base-4"
            onChange={this.handleChangeOption}
          />
        )}
        <div className="flex flex-auto items-center w-100">
          <Input
            placeholder={placeholder}
            className="bn w-100 w-100"
            onBlue={this.handleSearch}
            onChange={this.handleSearch}
          />
          <div className="g-pa3 pointer c-primary hover-c-dark-primary" onClick={this.handleClick}>
            <IconSearch />
          </div>
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
  onClick: PropTypes.func
}

Search.defaultProps = {
  placeholder: 'Search...',
  withOptions: false,
  options: []
}

export default Search