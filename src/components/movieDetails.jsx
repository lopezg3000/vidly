import React, { Component } from 'react';

class MovieDetails extends Component {
    handleSave = () => {
        this.props.history.push("/movies");
    }

    render() {
        return (
            <div>
                <h1>Movie Form {this.props.match.params.id}</h1>
                <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default MovieDetails;