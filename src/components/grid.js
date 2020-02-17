import React, { Component } from 'react';
import Header from "./dummy"
import MovieInfo from "./movieInfo"
import { getMovies } from "../services/fakeMovieService";
import "../grid.css"


class Grid extends Component {
    state = {
        count: 9,
        data: getMovies()
    }


    handleOnClick = (id) => {
        this.setState({
            data: this.state.data.filter(movie => movie._id !== id),
            count: this.state.count - 1
        })
        console.log(this.state.data)
    }

    render() {
        return (
            <div className="container">
                <Header headerItemsArr={["Title", "Genre", "Stock", "Rate"]} count={this.state.count} />
                <MovieInfo count={this.state.count} data={this.state.data} handleOnClick={this.handleOnClick} />
            </div>
        );
    }
}

export default Grid;


// create 5 columns at the top: Title, genre, stock, rate, button 
// 9 rows with information 
// Delete button removes row
// top shows the number of items in the movie List

