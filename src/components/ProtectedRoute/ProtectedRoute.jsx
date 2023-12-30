import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Update with the correct path

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation(); // useLocation hook to access the current location

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children; // If the user is authenticated, render the children
};

export default ProtectedRoute;
