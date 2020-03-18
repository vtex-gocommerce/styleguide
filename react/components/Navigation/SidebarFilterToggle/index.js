import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Toggle from '../../Form/Toggle'

class SidebarFilterToggle extends PureComponent {
  handleChange = option => {
    this.props.handleChange({ [this.props.filter.code]: [option] })
  }

  isActive = code => {
    return undefined !== this.props.enabledOptions.find(item => item.code === code)
  }

  render() {
    const { filter } = this.props
    return (
      <div>
        <ul className="list pa0 f6">
          {filter.options.map((item, index) => {
            const code = `${filter.code}-${item.code}`
            return (
              <li key={`${filter.code}${index}`}>
                <label className="inline-flex items-center mb2 pointer">
                  <Toggle
                    value={item.value}
                    name={filter.code}
                    className="mr3"
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
        </ul>
      </div>
    )
  }
}

SidebarFilterToggle.propTypes = {
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  enabledOptions: PropTypes.array,
  localeConfig: PropTypes.object,
  locale: PropTypes.string
}

SidebarFilterToggle.defaultProps = {
  localeConfig: {},
  locale: 'en-US'
}

export default SidebarFilterToggle
