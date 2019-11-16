import React from 'react';
import {
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
import {Tasks} from 'components/Works/Tasks.jsx'
import {DefectList} from 'components/Works/DefectList.jsx'
import {Requests} from 'components/Works/Requests.jsx'
import {Reports} from 'components/Works/Reports.jsx'
import {Common} from 'components/objects/Common.jsx'


export const AsideRoutes = {
    work: {
        path: '/works',
        items:  [{
            name: 'Tasks',
            path:'/tasks',
            icon: 'assignment',
            component: Tasks
            },
            {
            name: 'Defect List',
            path:'/defect-list',
            icon: 'list_alt',
            component: DefectList
            },
            {
            name: 'Repair requests',
            path:'/repair-requests',
            icon: 'local_phone',
            component: Requests
            },
            {
            name: 'Reports',
            path:'/reports',
            icon: 'assessment',
            component: Reports
            },
        ],
    },
    objects: {
        path: '/objects',
        items:  [{
            name: 'Objects',
            path:'/objects',
            icon: 'assignment',
            component: Common
            },
            {
            name: 'Equipment',
            path:'/equipment',
            icon: 'assignment',
            component: Common
            },
            {
            name: 'Parts',
            path:'/parts',
            icon: 'assignment',
            component: Common
            },
            {
            name: 'Meter',
            path:'/Meter',
            icon: 'assignment',
            component: Common
            },
            {
            name: 'Purchase requisition',
            path:'/purchase-requisition',
            icon: 'assignment',
            component: Common
            },
        ],
    }

}

export const RoutesList = () => {
    const routesTypesKeys = Object.keys(AsideRoutes);
    
    return (
        <Switch>
            {
                routesTypesKeys.map(key => {
                    const parentRoute = AsideRoutes[key]['path'];
                    
                    return AsideRoutes[key]['items'].map((route, index) => (
                    <Route 
                        key={route.name+index}
                        path={parentRoute + route.path}
                        render={(routeProps) => {
                            const Component = route.component;
                            return <Component {...routeProps} key={route.name+index} title={route.name} />
                        }}
                      >
                    
                    </Route>
                    )
                )})
            }
            <Route exact path="/" render={() => <Redirect to={'works/tasks'} />} />
        </Switch>
    )
}