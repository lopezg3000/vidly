import React, { Component } from 'react';
import Header from "./Header"
import MovieInfo from "./MovieInfo"
import { getMovies } from "../services/fakeMovieService";
import Counter from "./Counter";
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
            <React.Fragment>
                <Counter formatCount={this.formatCount()} />
                <div className={this.getDisplayClasses()}>
                    <Header headerItemsArr={["Title", "Genre", "Stock", "Rate"]} count={this.state.count} />
                    <MovieInfo count={this.state.count} data={this.state.data} handleOnClick={this.handleOnClick} />
                </div>
            </React.Fragment>
        );
    }

    getDisplayClasses() {
        let classes = "";
        classes += (this.state.count === 0) ? "containerNone" : "container";
        return classes;

    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "There are no movies in the database" : "Showing " + count + " in the database.";
    }
}

export default Grid;


// create 5 columns at the top: Title, genre, stock, rate, button 
// 9 rows with information 
// Delete button removes row
// top shows the number of items in the movie List

