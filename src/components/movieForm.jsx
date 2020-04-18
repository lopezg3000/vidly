import React from 'react';

const MovieForm = ({ match, history }) => {
    const { id } = match.params;
    return (
        <div>
            <h1>Movie Form {id !== "new" ? id : null}</h1>
            <button type="button" className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
        </div>
    );
};

export default MovieForm;
