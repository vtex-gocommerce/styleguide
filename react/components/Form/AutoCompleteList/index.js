import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import Input from '../Input'
import IconSearch from '../../../icons/IconSearch'

class AutoCompleteList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { filterInput: props.defaultValue }
  }

  onClick = e => {
    const clickedLabel = this.props.list.filter(item => {
      return item.id == e.target.value
    })[0].label

    this.setState({ filterInput: clickedLabel })
    this.onChange({ target: { value: clickedLabel } })
  }

  onBlur = e => {
    this.props.onBlur && this.props.onBlur(e)
  }

  onFocus = e => {
    this.props.onFocus && this.props.onFocus(e)
  }

  onChange = e => {
    this.props.onChange && this.props.onChange(e)
  }

  onInputChange = event => {
    this.setState({ filterInput: event.target.value })
    this.props.onChange && this.props.onChange(event)
  }

  filteredList = _filterInput => {
    return (
      this.props.list.filter((element, index) => {
        const elementLabel = element.label.toUpperCase()
        const filterInput = _filterInput.toUpperCase()
        return elementLabel.includes(filterInput) && filterInput != elementLabel
      }) || []
    )
  }

  render() {
    const { inputName, inputId, className, hasError, placeholder } = this.props
    const { filterInput } = this.state
    const filteredList = this.filteredList(this.state.filterInput)

    return (
      <div className="db  w-100">
        <div className="relative w-100">
          <Input
            name={inputName}
            id={inputId || inputName}
            value={filterInput}
            onChange={this.onInputChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder={placeholder}
            className=" w-100"
            hasError={hasError}
            iconBefore={<IconSearch />}
          />
          <React.Fragment>
            {filterInput &&
              filteredList.length > 0 && (
                <div className={`${styles.gc_autocompletelist} w-100 bg-white g-mt1 ba br2 b--base-4 ${className}`}>
                  <ul className="list g-pt4 g-pb2 g-ph4 mt0 mb0 c-on-base-1 tl">
                    {filteredList.map((item, i) => (
                      <li key={item.label} className="g-pb2 pointer" value={item.id} onClick={this.onClick}>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </React.Fragment>
        </div>
      </div>
    )
  }
}

AutoCompleteList.propTypes = {
  inputName: PropTypes.string,
  inputId: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func
}

AutoCompleteList.defaultProps = {
  inputName: '',
  inputId: '',
  className: '',
  defaultValue: '',
  list: [],
  hasError: false,
  onClick: selected => {}
}

export default AutoCompleteList
