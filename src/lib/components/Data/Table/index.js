import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import CheckBox from '../../Form/CheckBox'

class Table extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedList: []
        }
    }

    selectAll = (checked) => {
        let updatedList

        if (checked) {
            updatedList = [...Array(this.props.rows.length).keys()]
        } else {
            updatedList = []
        }

        this.setState({ selectedList: updatedList })
        this.props.onChange(updatedList)
    }

    select = (index, checked) => {
        let updatedList = this.state.selectedList

        if (checked) {
            updatedList.push(index)
        } else {
            var el = updatedList.indexOf(index)
            el != -1 && updatedList.splice(el, 1);
        }

        const mapped = this.props.rows.filter((element, index) => {
            if (updatedList.includes(index)) {
                return element
            }
        })

        this.setState({ selectedList: updatedList })
        this.props.onChange(mapped)
    }

    render() {
        const { columns, rows, selectable } = this.props

        return (
            <table className="ba b--navy-40 w-100" cellSpacing="0">
                <thead className="tl bg-navy-20">
                    <tr>
                        {selectable && (
                            <th className="bb b--navy-40 pv4 ph4 tc" style={{ width: "40px" }}><CheckBox onClick={this.selectAll} /></th>
                        )}
                        {columns.map(column => {
                            return <th key={column.label} className={`bb b--navy-40 pv4 ph4 navy-60 fw4 ${column.isCentered && 'tc'}`} style={{ width: column.size + '%' }}>
                                {!column.hideLabel && column.label}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {rows.map((fields, index) => {
                        const formatted_row = columns.map(column => {
                            return <td key={index + column.label} className={`bb b--navy-40 pv5 ph4 navy ${column.isCentered && 'tc'}`}>{fields[column.label]}</td>
                        })

                        return (
                            <tr key={index}>
                                {selectable && (
                                    <th className="bb b--navy-40 ph4 tc" style={{ width: "40px" }}><CheckBox onClick={(checked) => this.select(index, checked)} isChecked={this.state.selectedList.includes(index)} /></th>
                                )}
                                {formatted_row}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    /** Columns that will have on table. */
    columns: PropTypes.array.isRequired,
    /** Rows that will be show on table. */
    rows: PropTypes.array.isRequired,
    /** Makes rows selectable. */
    selectable: PropTypes.bool,
    onChange: PropTypes.func
}

Table.defaultProps = {
    selectable: false,
    onChange: () => { }
}

export default Table
