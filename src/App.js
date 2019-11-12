import React, { useState } from 'react';
import './App.scss';

import {Aside} from 'components/Aside/Aside.jsx'
import {RoutesList} from 'routes/AsideRoutes'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import {ModalContext} from 'ModalContext.jsx'

import {ModalCreateTask} from 'components/ModalCreateTask'


export default function App() {
    const [createTask,setCreateTask] = useState(false)
    const setCreateTaskFunc = ()=>setCreateTask(createTask=>!createTask)
    const [mask, setMask] = useState(false)
    const setMuskFunk = ()=>setMask(mask=>!mask)
    
    const coustomMaskClass = !mask ? 'mask-active' : '';

    return (
        <ModalContext.Provider value={{
            createTask,
            setCreateTaskFunc,
            mask,
            setMuskFunk,
            }}>

            <Router>
            <div className={coustomMaskClass}> </div>
            <main>
                <Aside/>
                <section>
                    <RoutesList  />
                </section>
            </main>
            
            <ModalCreateTask 
            createTask={createTask}
            mask={mask} 
            setCreateTaskFunc={setCreateTaskFunc} 
            setMuskFunk={setMuskFunk}
            />
            </Router>

        </ModalContext.Provider>
    );
}

