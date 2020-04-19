import React from 'react';

const SelectTag = ({ name, label, options, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                name={name}
                className="form-control"
                id={name}>
                {options.map(option => <option value={option.value}>{option.label}</option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default SelectTag;