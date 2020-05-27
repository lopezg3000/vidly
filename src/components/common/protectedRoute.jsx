import React from 'react'
import auth from '../../services/authService';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ path, component: Component }) => {
    return (
        <Route
            path={path}
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to='/login' />;
                return <Component {...props} />
            }}
        />
    );
}

export default ProtectedRoute;