import React from 'react';
import {
    Switch,
    Route,
    } from "react-router-dom";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
import {Tasks} from 'components/Works/Tasks.jsx'
import {DefectList} from 'components/Works/DefectList.jsx'
import {Requests} from 'components/Works/Requests.jsx'
import {Reports} from 'components/Works/Reports.jsx'


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
    // objects: {
    //     path: '/objects',
    //     items:  [{
    //         name: 'Objects',
    //         path:'/objects',
    //         icon: 'Objects',
    //         component: Objects
    //         },
    //         {
    //         name: 'Equipment',
    //         path:'/equipment',
    //         icon: 'Equipment',
    //         component: Equipment
    //         },
    //         {
    //         name: 'Parts',
    //         path:'/parts',
    //         icon: 'parts',
    //         component: Parts
    //         },
    //         {
    //         name: 'Meter',
    //         path:'/Meter',
    //         icon: 'Meter',
    //         component: Meter
    //         },
    //         {
    //         name: 'Purchase requisition',
    //         path:'/purchase-requisition',
    //         icon: '',
    //         component: PurchaseRequisition
    //         },
    //     ],
    // }

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
                        component={route.component}
                      >
                    </Route>
                    )
                )})
            }
        </Switch>
    )
}