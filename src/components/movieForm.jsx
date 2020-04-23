import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import _ from 'lodash';

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '', //interested in genre Id, when genre is selected in form it is the id that will be used to identify name.
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [], //Will Change once componentDidMount is used to get genres from imaginary server.
        errors: {}
    }

    componentDidMount() {
    };

    schema = {
        _id: Joi.string(), //not required because when creating a new movie there is no id property.
        title: Joi.string()
            .required()
            .label('Title'),
        genreId: Joi.string()
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
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if (movieId === 'new') return; //return because there is no need to populate form with an existing movie object

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace('/not-found');
        //user will be redirected to not found page if id is not found ie wrong url.
        //replace because pushing the back button will cause infinite loop of invalidIdPage and not-found page
        //return keyword used so that the rest of the code is not executed. Don't assume that rest of the code will not be executed.
        this.setState({ data: this.mapToViewModel(movie) });
        //updating data property but not setting it to the movie object that is recieved to the server.
        //restful api's are general purpose; not built for a specific page. Data that is returned is often used on several pages. 
        //Each page needs a piece of that data. it is also possible that what should be displayed on the page is a little different from the structure of the data.
        //mapToViewModel method created and used to get a movie object that is recieved from the server and maps it to a different kind of movie object that
        //can be used on this form. movie object returned is referred to as a view model, a model with a view. 
    };

    options = [
        { label: '', value: '' },
        { label: 'Action', value: 'Action' },
        { label: 'Comedy', value: 'Comedy' },
        { label: 'Thriller', value: 'Thriller' }
    ]

    doSubmit = () => {
        const genres = this.props.location.state.genres;
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
            return <Redirect to={{ pathname: "/movies", state: this.state.data }} />
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

export default withRouter(MovieForm);
