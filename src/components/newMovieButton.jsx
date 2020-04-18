import React, { Component } from 'react';
import { withRouter } from 'react-router';

class NewMovieButton extends Component {

    handleNewMovieForm = () => {
        this.props.history.push('/movies/new');
    };
    render() {
        const { label } = this.props;
        return (
            <button
                className="btn btn-primary mb-3"
                onClick={this.handleNewMovieForm}
            >
                {label}
            </button>
        );
    };
};

export default withRouter(NewMovieButton);