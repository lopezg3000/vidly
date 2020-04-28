import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <form>
            <input
                class="form-control"
                value={value}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onChange}
            />
        </form>
    );
}

export default SearchBar;