import React from 'react';

const ListGroup = props => {

    const { genres } = props;

    return (

        <ul className="list-group">
            <li className="list-group-item"><h4>All Genres</h4></li>
            {genres.map(genre => (
                <li key={genre._id} className="list-group-item"><h4>{genre.name}</h4></li>
            ))}
        </ul>
    );
}

export default ListGroup;