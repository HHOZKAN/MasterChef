import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const user = useSelector(state => state.user);
    const isAuthenticated = user.token && user.token.length > 0;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate('/login');
        }
        setIsLoading(false);
    }, [isAuthenticated, navigate, isLoading]);

    return isAuthenticated ? children : null;
}

export default PrivateRoute;