import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash"

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    // console.log("Current Page: ", currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize); //Math.ceil converts number calculated to an integer greater or equal to floating point number
    // console.log(pagesCount);
    if (pagesCount === 1 && currentPage === 1) return null;
    const pages = _.range(1, pagesCount + 1); //[1, ...pagesCount].map() 
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} style={{ cursor: "pointer" }} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;