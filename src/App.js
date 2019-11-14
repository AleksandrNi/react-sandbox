import React, { useState } from 'react';
import './App.scss';

import {Aside} from 'components/Aside/Aside.jsx'
import {RoutesList} from 'routes/AsideRoutes'
import {BrowserRouter as Router} from "react-router-dom";

import {StateProvider} from 'context/State'
import {initialState} from 'context/State'
import {reducer} from 'context/State'

import {ModalCreateTask} from 'components/ModalCreateTask'
import {Mask} from 'components/Mask'


export default function App() {
    
    
    return (
        <StateProvider 
        initialState={initialState}
        reducer={reducer}
        >

            <Router>
           
            <div className='main-wrapper'>
                <main>
                    <Aside />
                    <section>
                        <RoutesList  />
                    </section>
                </main>
            </div>
                <Mask/>
                <ModalCreateTask />
            </Router>
        </StateProvider>
    )
}
