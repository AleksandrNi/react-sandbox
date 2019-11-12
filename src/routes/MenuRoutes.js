import React from 'react';
import {
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

import {TablePage} from 'pages/Table/Table'
import {FormPage} from 'pages/Form/Form'

export const menuRoutes = [
    {
    name: 'table',
    path:'/table',
    icon: 'table',
    page: TablePage
    },
    {
    name: 'form',
    path:'/form',
    icon: 'form',
    page: FormPage
    },
  
];

export const RoutesList = () => {
    return (
        <Switch>
            {menuRoutes.map((route, index) => 
                <Route 
                    key={route.name+index}
                    path={route.path}>
                    {route.page}
                </Route>
            )}
            <Route exact path="/" render={() => <Redirect to={menuRoutes[0].path} />} />
        </Switch>
    )
}
 