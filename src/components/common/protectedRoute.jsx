import React from 'react'


const ProtectedRoute = ({ path }) => {
    return (
        <Route
            path={path}
            render={props => {
                if (!user) return <Redirect to='/login' />;
                return <MovieForm {...props} />
            }}
        />
    );
}

export default ProtectedRoute;