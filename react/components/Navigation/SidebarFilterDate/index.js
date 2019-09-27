import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import formatDate from 'date-fns/format'

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
      const [initDateParam, endDateParam] = props.enabledOptions
        .find(item => item.code === `${props.filter.code}-date-range`)
        .value.split('|')

      showDateRange = true
      initDate = initDateParam !== 'null' && new Date(`${initDateParam} `)
      endDate = endDateParam !== 'null' && new Date(`${endDateParam} `)
    }

    this.state = {
      showDateRange,
      initDate,
      endDate,
    }
  }

  formatNativeDate = (date) => {
    if (!date) return null
    return new Date(date)
  }

  formatCustomDate = (date, format = 'yyyy-MM-dd') => {
    if (!date) return null
    return formatDate(new Date(date), format)
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
    const { showDateRange, initDate, endDate } = this.state
    const { filter: { code } } = this.props

    if (showDateRange) {
      const option = {
        code: code + '-date-range',
        value: `${this.formatCustomDate(initDate)}|${this.formatCustomDate(endDate)}`,
        title: `${this.formatCustomDate(initDate)} - ${this.formatCustomDate(endDate)}`
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
                    value: `${this.formatCustomDate(initDate)}|${this.formatCustomDate(endDate)}`,
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
                    selected: this.formatNativeDate(initDate),
                    selectsStart: true,
                    startDate: this.formatNativeDate(initDate),
                    endDate: this.formatNativeDate(endDate),
                    locale,
                  }}
                />
                <p className="g-ma0 c-on-base-2 g-f2 g-mb1 g-mt3">{this.getTextByLocale('to')}</p>
                <DateTimePicker
                  className="w-100"
                  placeholder={`Ex. ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                  onChange={this.handleChangeDateEnd}
                  options={{
                    selected: this.formatNativeDate(endDate),
                    selectsEnd: true,
                    startDate: this.formatNativeDate(initDate),
                    endDate: this.formatNativeDate(endDate),
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
