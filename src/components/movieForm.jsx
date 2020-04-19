import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: { title: '', genre: '' },
        errors: {}
    }

    schema = {
        title: Joi.string()
            .required()
            .label('Title'),
        genre: Joi.string()
            .required()
            .label('Genre')
    }

    options = [
        { label: '', value: '' },
        { label: 'Action', value: 'action' },
        { label: 'Comedy', value: 'comedy' },
        { label: 'Thriller', value: 'thriller' }
    ]

    doSubmit = () => {
        //Call to Server
        console.log('Movie Saved');
    }


    render() {
        const { match, history } = this.props;
        const { id } = match.params;
        return (
            <div>
                <h1>Movie Form {id !== "new" ? id : null}</h1>
                <form onSubmit={this.handlSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelectTag('genre', 'Genre')}
                    {this.renderButton('Save')}
                </form>
                <button type="button" className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
            </div>
        );
    }
}

export default MovieForm;
