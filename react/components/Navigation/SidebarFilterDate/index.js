import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import RadioButton from '../../Form/RadioButton'
import DateTimePicker from '../../Form/DateTimePicker'

const currentDate = new Date()

class SidebarFilterDate extends PureComponent {
  constructor(props) {
    super(props)

    let initDate,
      endDate,
      showDateRange = false

    if (this.isActive(`${props.filter.code}-date-range`)) {
      const dateRange = props.enabledOptions
        .find(item => item.code === `${props.filter.code}-date-range`)
        .value.split('|')
      showDateRange = true
      initDate = dateRange[0]
      endDate = dateRange[1]
    }

    this.state = {
      showDateRange,
      initDate,
      endDate,
    }
  }

  handleChange = option => {
    this.setState({ showDateRange: option.code === `${this.props.filter.code}-date-range` })
    this.props.handleChange({ [this.props.filter.code]: [option] })
  }

  handleChangeDateInit = value => {
    this.setState({ initDate: value }, () => {
      this.changeDateRangeFilter()
    })
  }

  getTextByLocale = key => {
    return this.props.localeConfig[key]
  }

  handleChangeDateEnd = value => {
    this.setState({ endDate: value }, () => {
      this.changeDateRangeFilter()
    })
  }

  changeDateRangeFilter = () => {
    if (this.state.showDateRange) {
      const option = {
        code: this.props.filter.code + '-date-range',
        value: `${this.state.initDate}|${this.state.endDate}`,
        title: `${this.state.initDate} - ${this.state.endDate}`
      }

      this.handleChange(option)
    }
  }

  isActive = code => {
    return undefined !== this.props.enabledOptions.find(item => item.code === code)
  }

  render() {
    const { filter, locale } = this.props
    const { showDateRange, endDate, initDate } = this.state

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
                    value: `${this.state.initDate}|${this.state.endDate}`,
                    title: this.getTextByLocale('dateRange'),
                    code: `${filter.code}-date-range`
                  })
                }}
              />{' '}
              {this.getTextByLocale('dateRange')}
            </label>
            {showDateRange && (
              <div className={`g-mt3`}>
                <p className="g-ma0 c-on-base-2 g-f2 g-mb1">{this.getTextByLocale('from')}</p>
                <DateTimePicker
                  className="w-100"
                  placeholder={`Ex. ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                  onChange={this.handleChangeDateInit}
                  options={{
                    selected: initDate,
                    selectsStart: true,
                    startDate: initDate,
                    endDate: endDate,
                    locale,
                  }}
                />
                <p className="g-ma0 c-on-base-2 g-f2 g-mb1 g-mt3">{this.getTextByLocale('to')}</p>
                <DateTimePicker
                  className="w-100"
                  placeholder={`Ex. ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                  onChange={this.handleChangeDateEnd}
                  options={{
                    selected: endDate,
                    selectsEnd: true,
                    startDate: initDate,
                    endDate: endDate,
                    locale,
                  }}
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

SidebarFilterDate.propTypes = {
  localeConfig: PropTypes.object,
  locale: PropTypes.string,
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  enabledOptions: PropTypes.array
}

SidebarFilterDate.defaultProps = {
  localeConfig: {},
  locale: 'en-US'
}

export default SidebarFilterDate
