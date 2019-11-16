import React from 'react'

import {AsideRoutes} from 'routes/AsideRoutes'
import {NavLink} from 'react-router-dom'

export const Aside = (props) => {
    const types = Object.keys(AsideRoutes);
    console.log(props);
    
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
        <NavLink
        key={route.name+index}
        to={parentPath + route.path}
        className='aside-menu-items'
        activeClassName="aside-menu-items-active"
        >
        <li 
        >
            <i className="material-icons md-18">{route.icon}</i><p>{route.name}</p>
        </li>
        </NavLink>

    )
})
