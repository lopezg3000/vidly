import React, { Component } from 'react'
import { Link } from "react-router-dom";
import _ from 'lodash';

class TableBody extends Component {
    renderCell = (item, column, valueProperty) => {
        if (column.content) return column.content(item);
        else if (column.path === "title") return <Link to={`/movies/${item[valueProperty]}`}>{_.get(item, column.path)}</Link>;

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
                        {columns.map(column => (
                            <td key={this.createKey(item, column)}>
                                {this.renderCell(item, column, valueProperty)}
                            </td>
                        ))}
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