import React from 'react'

import {AsideRoutes} from 'routes/AsideRoutes'
import {Link} from 'react-router-dom'

export const Aside = (props) => {
    const types = Object.keys(AsideRoutes);

    return (
        <aside >
            <div className='Logo'>
                <img src="https://cdn.worldvectorlogo.com/logos/dropzone.svg" alt=""/>
                <p>Digital platform</p>
            </div>
            <hr/>

            {types.map((type, index) => {
                return (               
                <ul
                key={type}
                >
                <TypesList 
                routeList={AsideRoutes[type]['items']} 
                parentPath={AsideRoutes[type]['path']}
                />
                </ul>
                )
            })}
        </aside>  
    )
}


const TypesList = ({routeList, parentPath}) => routeList.map((route,index) => {
    return (
        <li className='aside-menu-items'
        key={route.name+index}
        >
            <Link
            to={parentPath + route.path}
            >
            <i className="material-icons md-18">{route.icon}</i><p>{route.name}</p>
            </Link>
        </li>

    )
})
