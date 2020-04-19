import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: { title: '' },
        errors: {}
    }

    schema = {
        title: Joi.string()
            .required()
            .label('Title')
    }

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
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Genre</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Thriller</option>
                        </select>
                    </div>
                </form>
                <button type="button" className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
            </div>
        );
    }
}

export default MovieForm;
