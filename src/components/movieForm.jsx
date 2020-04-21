import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from './common/form';
import _ from 'lodash';

class MovieForm extends Form {
    state = {
        data: { title: '', genre: '', numberInStock: '', dailyRentalRate: '' },
        errors: {},
        formSubmitted: false
    }

    schema = {
        title: Joi.string()
            .required()
            .label('Title'),
        genre: Joi.string()
            .required()
            .label('Genre'),
        numberInStock: Joi.number()
            .required()
            .integer()
            .min(0)
            .max(100)
            .label('Number in Stock'),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label('Daily Rental Rate'),
    }

    options = [
        { label: '', value: '' },
        { label: 'Action', value: 'Action' },
        { label: 'Comedy', value: 'Comedy' },
        { label: 'Thriller', value: 'Thriller' }
    ]

    doSubmit = () => {
        const genres = this.props.location.genres;
        const data = this.state.data;
        const genre = _.find(genres, { name: data.genre });
        const uniqueId = new Date().getTime().toString();
        const newMovie = { _id: uniqueId, ...data, genre: genre, }
        //Call to Server
        this.setState({ data: newMovie, formSubmitted: true })
        console.log('Movie Saved', newMovie);
    }


    render() {
        const { match } = this.props;
        const { id } = match.params;

        if (this.state.formSubmitted) {
            return <Route to={{ pathname: "/movies", newMovie: this.state.data }} />
        }
        return (
            <div>
                <h1>Movie Form {id !== "new" ? id : null}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelectTag('genre', 'Genre')}
                    {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                    {this.renderInput('dailyRentalRate', 'Rate', 'number')}
                    {this.renderButton('Save')}
                </form>
            </div >
        );
    }
}

export default MovieForm;
