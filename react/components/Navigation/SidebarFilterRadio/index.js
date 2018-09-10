import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'

class SidebarFilterRadio extends PureComponent {
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
        </ul>
      </div>
    )
  }
}

SidebarFilterRadio.propTypes = {
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  enabledOptions: PropTypes.array,
  locale: PropTypes.object
}

SidebarFilterRadio.defaultProps = {
  locale: {}
}

export default SidebarFilterRadio
