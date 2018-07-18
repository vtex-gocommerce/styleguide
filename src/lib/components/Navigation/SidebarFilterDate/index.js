import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'
import Input from '../../Form/Input'

class SidebarFilterDate extends PureComponent {
  constructor(props) {
    super(props)

    let dateInit,
      dateEnd,
      showDateRange = false

    if (this.isActive(`${props.filter.code}-date-range`)) {
      const dateRange = props.activeOptions
        .find(item => item.code === `${props.filter.code}-date-range`)
        .value.split('|')

      showDateRange = true
      dateInit = dateRange[0]
      dateEnd = dateRange[1]
    }

    this.state = { showDateRange, dateInit, dateEnd }
  }

  handleChange = option => {
    this.setState({ showDateRange: option.code === `${this.props.filter.code}-date-range` })
    this.props.handleChange({ [this.props.filter.code]: [option] })
  }

  handleChangeDateInit = e => {
    const value = e.target.value
    this.setState({ dateInit: value }, () => {
      this.changeDateRangeFilter()
    })
  }

  handleChangeDateEnd = e => {
    const value = e.target.value
    this.setState({ dateEnd: value }, () => {
      this.changeDateRangeFilter()
    })
  }

  changeDateRangeFilter = () => {
    if (this.state.showDateRange) {
      const option = {
        code: this.props.filter.code + '-date-range',
        value: `${this.state.dateInit}|${this.state.dateEnd}`,
        title: `${this.state.dateInit} - ${this.state.dateEnd}`
      }

      this.handleChange(option)
    }
  }

  isActive = code => {
    return undefined !== this.props.activeOptions.find(item => item.code === code)
  }

  render() {
    const { filter } = this.props
    const { showDateRange, dateEnd, dateInit } = this.state
    return (
      <div>
        <ul className="list g-pa0 g-f2">
          {filter.options.map((item, index) => {
            const code = `${filter.code}-${item.title}`
            return (
              <li key={`${filter.code}${index}`}>
                <label className="inline-flex items-center g-mb2 pointer">
                  <RadioButton
                    value={item.value}
                    name={filter.code}
                    className="g-mr3"
                    isChecked={this.isActive(code)}
                    onClick={() => {
                      this.handleChange({ ...item, code: code })
                    }}
                  />
                  {item.title}
                </label>
              </li>
            )
          })}

          <li>
            <label className="inline-flex items-center g-mb2 pointer">
              <RadioButton
                name={filter.code}
                isChecked={this.isActive(`${filter.code}-date-range`)}
                value="date-range"
                className="g-mr3"
                onClick={() => {
                  this.handleChange({
                    value: `${this.state.dateInit}|${this.state.dateEnd}`,
                    title: 'Date Range',
                    code: `${filter.code}-date-range`
                  })
                }}
              />{' '}
              Date range
            </label>
            <div className={`g-mt3 ${showDateRange ? 'db' : 'dn'}`}>
              <p className="g-ma0 c-on-base-2 g-f2 g-mb1">From</p>
              <Input
                value={dateInit}
                className="w-100"
                mask="9999-99-99"
                placeholder="Ex. 1989-11-30"
                onChange={this.handleChangeDateInit}
              />
              <p className="g-ma0 c-on-base-2 g-f2 g-mb1 g-mt3">To</p>
              <Input
                value={dateEnd}
                className="w-100"
                mask="9999-99-99"
                placeholder="Ex. 1989-11-30"
                onChange={this.handleChangeDateEnd}
              />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

SidebarFilterDate.propTypes = {
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  activeOptions: PropTypes.array
}

export default SidebarFilterDate
