import React from 'react';

const SearchBar = () => {
    return (
        <form>
            <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onchange}
            />
        </form>
    );
}

export default SearchBar;