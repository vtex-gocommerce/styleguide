import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class AutoCompleteList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  onClick(id) {
    this.props.onClick(this.props.list[id])
  }

  render() {
    const { className, list } = this.props

    return (
      <React.Fragment>
        {list.length > 0 && (
          <div className={`${styles.gc_autocompletelist} w-100 bg-white g-mt1 ba br2 b--base-4 ${className}`}>
            <ul className="list g-pt4 g-pb2 g-ph4 mt0 mb0 c-on-base-1">
              {this.props.list.map((item, i) => (
                <li key={i} className="g-pb2 pointer" onClick={(e) => this.onClick(i)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    )
  }
}

AutoCompleteList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func
}

AutoCompleteList.defaultProps = {
  className: '',
  list: [],
  onClick: selected => {}
}

export default AutoCompleteList
