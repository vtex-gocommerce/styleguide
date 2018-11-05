import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'
import Input from '../../Form/Input'
import CheckBox from '../../Form/CheckBox'

class SidebarFilterCheckbox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: this.props.enabledOptions.filter(element => element.code.indexOf(props.filter.code + '-') !== -1)
    }
  }

  handleChange = () => {
    this.props.handleChange({ [this.props.filter.code]: this.state.list })
  }

  handleAdd = option => {
    this.setState(
      prev => ({
        list: [...prev.list, option]
      }),
      () => {
        this.handleChange()
      }
    )
  }

  handleRemove = option => {
    this.setState(
      prev => ({ list: prev.list.filter(item => item.code !== option.code) }),
      () => {
        this.handleChange()
      }
    )
  }

  isActive = code => {
    return undefined !== this.state.list.find(item => item.code === code)
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
                  <CheckBox
                    value={item.value}
                    name={filter.code}
                    checked={this.isActive(code)}
                    onClick={_ => {
                      if (this.isActive(code) === false) {
                        this.handleAdd({ ...item, code: code })
                        return
                      }

                      this.handleRemove({ ...item, code: code })
                    }}
                  />
                  <span className="g-ml3">{item.title}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

SidebarFilterCheckbox.propTypes = {
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  enabledOptions: PropTypes.array,
  localeConfig: PropTypes.object,
  locale: PropTypes.string
}

SidebarFilterCheckbox.defaultProps = {
  localeConfig: {},
  locale: 'en-US'
}

export default SidebarFilterCheckbox
