import React from 'react'
import auth from '../../services/authService';


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