import React from 'react';

const ListGroup = props => {

    const { textProperty, valueProperty, resetGenreProperty, genres, currentGenre, onReset, onGenreChange } = props;

    return (

        <ul className="list-group">
            <li
                className={resetGenreProperty === currentGenre ? "list-group-item active" : "list-group-item"}
                onClick={onReset}
                style={{ cursor: "pointer" }}
            >
                <h4>All Genres</h4>
            </li>
            {genres.map(genre => (
                <li
                    key={genre[valueProperty]}
                    className={genre[textProperty] === currentGenre ? "list-group-item active" : "list-group-item"}
                    onClick={() => onGenreChange(genre[textProperty], genre[valueProperty])}
                    style={{ cursor: "pointer" }}
                >
                    <h4>{genre[textProperty]}</h4></li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
    resetGenreProperty: "allGenres"
};

export default ListGroup;