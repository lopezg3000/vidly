import React from 'react';

const ListGroup = props => {

    const { genres, currentGenre, onReset, onGenreChange } = props;

    return (

        <ul className="list-group">
            <li
                className={"allGenres" === currentGenre ? "list-group-item active" : "list-group-item"}
                onClick={onReset}
                style={{ cursor: "pointer" }}
            >
                <h4>All Genres</h4>
            </li>
            {genres.map(genre => (
                <li
                    key={genre._id}
                    className={genre.name === currentGenre ? "list-group-item active" : "list-group-item"}
                    onClick={() => onGenreChange(genre.name, genre.id)}
                    style={{ cursor: "pointer" }}
                >
                    <h4>{genre.name}</h4></li>
            ))}
        </ul>
    );
}

export default ListGroup;