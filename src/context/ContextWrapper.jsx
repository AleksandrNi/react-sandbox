// import React, { useState } from 'react';

// import {ModalContext} from 'context/ModalContext.jsx'

// export const ContextWrapper = () => {
//     console.log(ModalContext);
    
//     // modal Form
//     const [createTask,setCreateTask] = useState(false)
//     const setCreateTaskFunc = ()=>setCreateTask(createTask=>!createTask)
    
//     // mask
//     const [mask, setMask] = useState(false)
//     const setMuskFunc = ()=>setMask(mask=>!mask)

//     // tasks
//     const [tasks,setTasks] = useState([]);
//     const addNewTask = (params) => {
//         const indexExists = tasks.findIndex(task=>task.id === params.id)
    
//         indexExists = -1
//             ? setTasks(tasks=>[...tasks, params])
//             : setTasks(tasks=>[...tasks.slice(0, indexExists), params, ...tasks.slice(indexExists + 2) ])
//     }

//     const NewModalContext = Object.create(ModalContext)
//     NewModalContext.value =  [
//         createTask, 
//         setCreateTaskFunc, 
//         mask, 
//         setMuskFunc 
//         ]
//     return NewModalContext
        
// }
// const coustomMaskClass = mask ? 'mask-active' : '';


//     // modal Form
//     const [createTask,setCreateTask] = useState(false)
//     const setCreateTaskFunc = ()=>setCreateTask(createTask=>!createTask)
    
//     // mask
//     const [mask, setMask] = useState(false)
//     const setMuskFunc = ()=>setMask(mask=>!mask)

//     // tasks
//     const [tasks,setTasks] = useState([]);
//     const addNewTask = (params) => {
//         const indexExists = tasks.findIndex(task=>task.id === params.id)
        
//         indexExists = -1
//             ? setTasks(tasks=>[...tasks, params])
//             : setTasks(tasks=>[...tasks.slice(0, indexExists), params, ...tasks.slice(indexExists + 2) ])
//     }
//     value={ [
//         createTask, 
//         setCreateTaskFunc, 
//         mask, 
//         setMuskFunc 
//         ] }
// >
// );
// }
