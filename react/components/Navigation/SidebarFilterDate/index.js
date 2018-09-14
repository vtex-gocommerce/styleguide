import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'
import Input from '../../Form/Input'
import DateTimePicker from '../../Form/DateTimePicker'

class SidebarFilterDate extends PureComponent {
  constructor(props) {
    super(props)

    let dateInit,
      dateEnd,
      showDateRange = false

    if (this.isActive(`${props.filter.code}-date-range`)) {
      const dateRange = props.enabledOptions
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

  getTextByLocale = key => {
    return this.props.locale[key]
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
    return undefined !== this.props.enabledOptions.find(item => item.code === code)
  }

  render() {
    const currentDate = new Date()
    const { filter } = this.props
    const { showDateRange, dateEnd, dateInit } = this.state

    return (
      <div>
        <ul className="list g-pa0 g-f2">
          {filter.options.map((item, index) => {
            const code = `${filter.code}-${item.code}`
            return (
              <li key={`${filter.code}${index}`}>
                <label className="inline-flex items-center g-mb2 pointer">
                  <RadioButton
                    value={item.value}
                    name={filter.code}
                    className="g-mr3"
                    checked={this.isActive(code)}
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
                checked={this.isActive(`${filter.code}-date-range`)}
                value="date-range"
                className="g-mr3"
                onClick={() => {
                  this.handleChange({
                    value: `${this.state.dateInit}|${this.state.dateEnd}`,
                    title: this.getTextByLocale('dateRange'),
                    code: `${filter.code}-date-range`
                  })
                }}
              />{' '}
              {this.getTextByLocale('dateRange')}
            </label>
            <div className={`g-mt3 ${showDateRange ? 'db' : 'dn'}`}>
              <p className="g-ma0 c-on-base-2 g-f2 g-mb1">{this.getTextByLocale('from')}</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

SidebarFilterDate.propTypes = {
  locale: PropTypes.object,
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  enabledOptions: PropTypes.array
}

SidebarFilterDate.defaultProps = {
  locale: {}
}

export default SidebarFilterDate
