import React , {createContext, useContext, useReducer } from 'react';
import { stat } from 'fs';

export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider
    value={useReducer(reducer, initialState)}
    >
        {children}
    </StateContext.Provider>
)

export const UseStateValue = () => useContext(StateContext);

export const reducer = (state, action) => {
    console.log('==========');
    console.log('action');
    console.log(action);
    console.log('==========');
    
    switch (action.type) {
        case 'MODAL_CREATE_TASK_ON':    return {...state,  displayModalCreateTask: true,  displayMask: true }
        
        case 'MODAL_CREATE_TASK_OFF':   return {...state, displayModalCreateTask: false,  displayMask: false }
        
        case 'MODAL_SET_ACTIVE_TASK':   return {...state, activeTask: {...state.activeTask, ...action.payload}}
        case 'MODAL_CLEAN_ACTIVE_TASK': return {...state, activeTask: {...state.taskTemplate}}

        case 'MODAL_CREATE_TASK':   
                    
        const newTasksList = [...state.tasks]
        newTasksList.push({...state.activeTask})      
        return {...state, tasks: newTasksList }

        case 'MODAL_EDIT_TASK':
            const indexExists = state.tasks.findIndex(task=>task.id === state.activeTask.id)
            if(indexExists === -1) return state;
            const editedTaskList = [...state.tasks.slice(0, indexExists), state.activeTask, ...state.tasks.slice(indexExists + 1) ]

            console.log('{...state, tasks: editedTaskList }');
            console.log({...state, tasks: editedTaskList });
            
            return {...state, tasks: editedTaskList }


        default:
            return state;
    }
}


export const initialState = {
    tasks: [],
    displayMask: false,
    displayModalCreateTask: false,
    activeTask: {},
    taskTemplate: {
            date: '',
            completedDate: '',
            number: '',
            status: '', // (green|orange|red)
            name: '',
            priority: '', // (low|middle|high)
            brigade: '',
            object: '',
            id: '',
        }
}

