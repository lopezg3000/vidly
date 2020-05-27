import React from 'react'
import auth from '../../services/authService';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ path }) => {
    return (
        <Route
            path={path}
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to='/login' />;
                return <MovieForm {...props} />
            }}
        />
    );
}

export default ProtectedRoute;