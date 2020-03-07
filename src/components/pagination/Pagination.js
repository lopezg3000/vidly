import React from "react"

const Pagination = props => {

    const { count, pageSize } = props;

    const pageCount = count / pageSize;

    // [1, 2, 3].map()

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link">1</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;