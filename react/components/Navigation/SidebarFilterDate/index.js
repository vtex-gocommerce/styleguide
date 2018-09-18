import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'
import Input from '../../Form/Input'
import DateTimePicker from '../../Form/DateTimePicker'
import moment from 'moment'

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

    this.state = { showDateRange, initDate, endDate, initDateMoment: moment(initDate), endDateMoment: moment(endDate) }
  }

  handleChange = option => {
    this.setState({ showDateRange: option.code === `${this.props.filter.code}-date-range` })
    this.props.handleChange({ [this.props.filter.code]: [option] })
  }

  handleChangeDateInit = momentValue => {
    this.setState({ initDate: momentValue.format('YYYY-MM-DD'), initDateMoment: momentValue }, () => {
      this.changeDateRangeFilter()
    })
  }

  getTextByLocale = key => {
    return this.props.localeConfig[key]
  }

  handleChangeDateEnd = momentValue => {
    this.setState({ endDate: momentValue.format('YYYY-MM-DD'), endDateMoment: momentValue }, () => {
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
    const currentDate = new Date()
    const { filter, locale } = this.props
    const { showDateRange, endDate, initDate, initDateMoment, endDateMoment } = this.state

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
            <div className={`g-mt3 ${showDateRange ? 'db' : 'dn'}`}>
              <p className="g-ma0 c-on-base-2 g-f2 g-mb1">{this.getTextByLocale('from')}</p>
              <DateTimePicker // value={initDate}
                className="w-100"
                placeholder={`Ex. ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                onChange={this.handleChangeDateInit}
                options={{
                  dateFormat: 'YYYY-MM-DD',
                  selected: initDate ? moment(initDate) : null,
                  selectsStart: true,
                  startDate: initDateMoment,
                  endDate: endDateMoment,
                  locale
                }}
              />
              <p className="g-ma0 c-on-base-2 g-f2 g-mb1 g-mt3">{this.getTextByLocale('to')}</p>
              <DateTimePicker // value={endDate}
                className="w-100"
                placeholder={`Ex. ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
                onChange={this.handleChangeDateEnd}
                options={{
                  dateFormat: 'YYYY-MM-DD',
                  selected: endDate ? moment(endDate) : null,
                  selectsEnd: true,
                  startDate: initDateMoment,
                  endDate: endDateMoment,
                  locale
                }}
              />
            </div>
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
