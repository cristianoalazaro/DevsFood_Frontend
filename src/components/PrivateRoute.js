import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from 'react-router-dom';

export default ({ children, ...rest }) => {
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    if (!token){
        history.push('/login');
        return;
    }

    return <Route { ...rest }>{ children }</Route>
}