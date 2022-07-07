import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { selectorAuth } from '../../store/selectors';

const Protected = ({ redirect, children }) => {
    const isLogin = useSelector(selectorAuth);
    if (isLogin === null) {
        return <Navigate to={redirect} replace />;
    }
    return children;
};
export default Protected;