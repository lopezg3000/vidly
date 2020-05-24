
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/common/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import RegisterForm from './components/registerForm'
import LoginForm from './components/loginForm';
import Logout from './components/common/logout';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

//commit test

class App extends Component {
    state = {}

    componentDidMount() {
        const user = auth.getCurrentUser();

        this.setState({ user });
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={this.state.user} />
                <main className="container">
                    <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies/new" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;

