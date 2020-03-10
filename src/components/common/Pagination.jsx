import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {

    const { count, pageSize, currentPage, onPageChange } = props;
    // console.log(currentPage);
    const pageCount = Math.ceil(count / pageSize);
    // console.log(pageCount);
    if (pageCount === 1 && currentPage === 1) return null;
    const pages = _.range(1, pageCount + 1);
    // [1 ... pagesCount].map()

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link" style={{ cursor: "pointer" }} onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;