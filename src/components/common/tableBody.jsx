import React, { Component } from 'react'
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item);

        return _.get(item, column.path);
    };

    createKey = (item, column, valueProperty) => {
        return item[valueProperty] + (column.path || column.key);
    };

    render() {
        const { data, columns, valueProperty } = this.props;

        return (

            <tbody>
                {data.map(item => (
                    <tr key={item[valueProperty]}>
                        {columns.map(column => {
                            if (column.key || column.path) return (
                                <td key={this.createKey(item, column)}>
                                    {this.renderCell(item, column, valueProperty)}
                                </td>

                            )
                            return null;
                        })}
                    </tr>
                ))}
            </tbody>
        );
    }
};

TableBody.defaultProps = {
    valueProperty: '_id'
};

export default TableBody;