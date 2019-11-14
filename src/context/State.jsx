import React , {createContext, useContext, useReducer } from 'react';

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
    switch (action.type) {
        case 'MODAL_CREATE_TASK_ON':    return {...state,  displayModalCreateTask: true,  displayMask: true }
        
        case 'MODAL_CREATE_TASK_OFF':   return {...state, displayModalCreateTask: false,  displayMask: false }
        
        case 'MODAL_CREATE_TASK':       
        const newTasksList = [...state.tasks]
        newTasksList.push(action.payload)      
        console.log('newTasksList');
        console.log(newTasksList);
        console.log("{...state, tasks: newTasksList }");
        console.log({...state, tasks: newTasksList });
        
        return {...state, tasks: newTasksList }

        case 'MODAL_EDIT_TASK':
            const indexExists = state.findIndex(task=>task.id === action.payload.id)
            if(indexExists === -1) return state;
            return [...state.slice(0, indexExists), action.payload, ...state.slice(indexExists + 2) ]

        default:
            return state;
    }
}


export const initialState = {
    tasks: [],
    displayMask: false,
    displayModalCreateTask: false,
    activeTaskId: '',
    taskTemplate: {
            data: '',
            number: '',
            status: '', // (green|orange|red)
            name: '',
            priority: '', // (low|middle|high)
            brigade: '',
            object: '',
            id: '',
        }
}

