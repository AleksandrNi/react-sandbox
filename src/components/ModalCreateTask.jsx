import React, { useEffect, useRef } from 'react'
import {UseStateValue} from 'context/State';

export const ModalCreateTask = () => {
    const [state, dispatch] = UseStateValue();

    const task = state.activeTask;

    const modalCreateTaskClass = state.displayModalCreateTask
        ? 'modal-create-task' 
        : 'modal-create-task-disabled';

    const closeModalCreateTask = () => {    
        dispatch({
            type: 'MODAL_CREATE_TASK_OFF',
            payload: ''
        })
        dispatch({
            type: 'MODAL_CLEAN_ACTIVE_TASK'
        })
        document.getElementById("modal-create-task-form").reset();
    }
    const modalCreateMaskRef = useRef();

    const clickOutside = (event)=> {
        const target = event.target;
        if( !modalCreateMaskRef.current.contains(target) && state.displayModalCreateTask ) {            
            closeModalCreateTask()
        }
    }
    
    useEffect(()=> { 
        document.addEventListener('click', clickOutside)
        
        return () => {
            document.removeEventListener('click', clickOutside)
        }
        
    }, [modalCreateTaskClass])

    // DATE INPUT
    const dateInputEvent =  state.activeTask.date ? 'completedDate' : 'date'
    const dateInputDisabled = (state.activeTask.date && state.activeTask.status !== 'done') 
    || !state.activeTask.completedDate && state.activeTask.status === 'done' 
        ? true
        : false


    const setTaskMethod = (value, action) => {

        const switcher = () => {
            return dispatch({
                type: 'MODAL_SET_ACTIVE_TASK',
                payload: {...state.activeTask, [action]: value }
            });
        }
        

        switch (action) {
            case 'date':    
            case 'number':  
            case 'status':  
            case 'name':    
            case 'priority':
            case 'brigade':  
            case 'object':  return switcher()
            default:
                console.log('unexpected case');
                console.log(value);
                console.log(action);
                break;
        }
    }

    const submitTask = () => {
        // let taskCompleted = true
        // for(let key in task) {
        //     if(!task[key]) {
        //         taskCompleted = false;
        //         break;
        //     }
        // }
        // if(!taskCompleted) return;
        // task.id = ~~(Math.random()*1000);
        if(typeof state.activeTask.id === 'number') { 
            dispatch({
                type: 'MODAL_SET_ACTIVE_TASK',
                payload: {
                    ...state.activeTask, 
                    date: state.activeTask.date ? state.activeTask.date : new Date().toISOString().split('T')[0],
                    completedDate:  state.activeTask.status === 'done' ? 
                        state.activeTask.completedDate ? 
                            state.activeTask.completedDate : 
                            new Date().toISOString().split('T')[0]
                        :"",
                }
            });
            dispatch({
                type: 'MODAL_EDIT_TASK'
            })
            closeModalCreateTask()
        } else {
            dispatch({
                type: 'MODAL_SET_ACTIVE_TASK',
                payload: {
                    ...state.activeTask, id: ~~(Math.random()*1000), 
                    date: state.activeTask.date ? state.activeTask.date : new Date().toISOString().split('T')[0],
                    completedDate:  state.activeTask.status === 'done' ? 
                    state.activeTask.completedDate ? 
                        state.activeTask.completedDate : 
                        new Date().toISOString().split('T')[0]
                    :"",
                }
            });
            dispatch({
                type: 'MODAL_CREATE_TASK'
            })
            closeModalCreateTask()
        }

    }
    
    return (
        <div className={modalCreateTaskClass} ref={modalCreateMaskRef} >
            <div className='modal-create-task__wrapper'>
                <div className='modal-create-task__head'>
                    <p>{state.activeTask.id ? 'Task - edit': 'Task - create'}</p>
                    <div 
                    onClick={closeModalCreateTask}
                    className='modal-create-task__head__close'>
                        <i className="material-icons md-18">close</i>
                    </div>
                </div>

                <div className='wrapper-column'>
                    <div className='modal-create-task__container'>
                        <div className='modal-create-task__container__first' >
                            <form id='modal-create-task-form' >
                            {/* <div className='modal-create-task__container__first__header'><p>Header</p></div> */}
                            <div className='modal-create-task__container__first__image'>
                                <img src="https://picsum.photos/400/200" alt=""/>
                            </div>
                            <div className='modal-create-task__container__first__body'>
                                <div className='modal-create-task__container__first__body__meta'>
                                    <div className='modal-create-task__container__first__body__priority'>
                                        <label htmlFor="creeate-task-priority">Select priority</label>
                                            <select 
                                            onChange={(event) => setTaskMethod(event.target.value, 'priority')}
                                            value={task.priority || ''}
                                            name="creeate-task-priority" 
                                            id="creeate-task-priority">
                                                <Priority />
                                            </select>
                                                
                                    </div>
                                    <div className='modal-create-task__container__first__body__date'>
                                    <label htmlFor="creeate-task-date">Set date</label>
                                            <input 
                                            type="text" 
                                            disabled={dateInputDisabled}
                                            id="creeate-task-date" 
                                            placeholder={task.data} 
                                            onChange={(event) => setTaskMethod(event.target.value.slice(0,10), dateInputEvent)}
                                            />
                                    </div>
                                </div>
                                <div className='modal-create-task__container__first__body__name'>
                                    <input 
                                    value={task.name || ''}
                                    onChange={(event) => setTaskMethod(event.target.value, 'name')}
                                    type="text" 
                                    placeholder='Type task name' 
                                    placeholder='Type task'
                                    />
                                </div>

                                <div className='modal-create-task__container__first__body__status'>
                                    <div>
                                    <label htmlFor="creeate-task-status">Select status</label>
                                    <select 
                                     onChange={(event) => setTaskMethod(event.target.value, 'status')}
                                    name="status" 
                                    id="creeate-task-status"
                                    value={task.status || ''}
                                    >
                                        <Status/>                                 
                                    </select>
                                    </div>
                                    <div className='modal-create-task__container__first__body__time'>
                                    <label htmlFor="creeate-task-number">Set number</label>
                                    <input 
                                     onChange={(event) => setTaskMethod(event.target.value, 'number')}
                                    type="text" id="creeate-task-number" placeholder='Set number'
                                    value={task.number || ''}
                                    />
                                    </div>
                                </div>

                                <div className='modal-create-task__container__first__body__task-details'>
                                    <div className='modal-create-task__container__first__body__title'>
                                        <p>category</p>
                                        <p>equipment</p>
                                        <p>brigade</p>
                                        {/* <p>brigadier</p> */}
                                        <p>Start date</p>
                                        {/* <p>price</p> */}
                                        <p>completed</p>
                                    </div>
                                    <div className='modal-create-task__container__first__body__text'>
                                        <p>Hurt</p>
                                        <p>Crane</p>
                                         <select 
                                        onChange={(event) => setTaskMethod(event.target.value, 'brigade')}
                                        name="status" 
                                        id="creeate-task-brigade"
                                        value={task.brigade}
                                        >
                                            <Brigade/>                                 
                                        </select>
                                        {/* <p>John Smith</p> */}
                                        <p>{state.activeTask.date || new Date().toISOString().split('T')[0]  }</p>
                                        {/* <p>1500</p> */}
                                        <p>{state.activeTask.completedDate || 'not yet'}</p>
                                    </div>

                                </div>
                                <div 
                                onClick={submitTask}
                                className='modal-create-task__submit-button'>
                                    Submit
                                </div>
                            </div>
                            </form>
                        </div>


                        <div className='modal-create-task__container__second'>
                            <div className='modal-create-task__container__second__clean-width'>
                                <div className='modal-create-task__subtask-list__title'>
                                    <div >
                                    <i className="material-icons md-18">format_list_bulleted</i>
                                    </div>
                                    <div><p>Subtasks list</p></div>
                                </div>
                                <div className='modal-create-task__subtask-list'>
                                    <SubtaskList />

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='modal-create-task__container-2' >

                        <div className='wrapper'>
                            <div className='modal-create-task__extra-payments'>
                                <div className='modal-create-task__extra-payments__title'>
                                        <div >
                                        <i className="material-icons md-18">payment</i>
                                        </div>
                                        <div><p>Extra payments</p></div>
                                </div>
                                <div className='modal-create-task__extra-payments__body'>
                                        <div >
                                        <i className="material-icons md-18">add_circle_outline</i>
                                        </div>
                                        <div><p>add</p></div>
                                </div>
                            </div>
                            <div className='modal-create-task__parts'>
                                <div className='modal-create-task__parts__title'>
                                    <div >
                                        <i className="material-icons md-18">shopping_basket</i>
                                        </div>
                                    <div><p>Parts</p></div>
                                </div>
                                <div className='modal-create-task__parts__body'>
                                        <div >
                                        <i className="material-icons md-18">add_circle_outline</i>
                                        </div>
                                        <div><p>add</p></div>
                                </div>
                            </div>
                        </div>

                    </div> 
                    <div className='modal-create-task__container-3' >

                        <div className='wrapper'>
                            <div className='map-wrapper'>
                            <div className='map-title'><p>Place on the map</p></div>
                                <div className='modal-create-task__map'>
                                    <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_582,c_limit/GoogleMapTA.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='modal-create-task__footer'>
                    
                </div>


            </div>
        </div>
    )
}


const SubtaskList = () => {
    const subTasks = [
        {title: 'subtask title 1'},
        {title: 'subtask title 2'},
        {title: 'subtask title 3'},
        {title: 'subtask title 4'},
    ]
    return subTasks.map((item, index) => (
        <div 
        key={index}
        className='subtask-item'>
            <div className='subtask-item__actions'>
                <p>{item.title}</p>
                <select name="" id="">
                    <option value="prepare">prepare</option>
                    <option value="process">process</option>
                    <option value="completed">completed</option>
                </select>
            </div>
            <div className='subtask-item__docs'>
            <i className="material-icons md-18">picture_as_pdf</i>
            <i className="material-icons md-18">photo_camera</i>
            </div>
        </div>
    ))
}

const Priority = () => {
    const options = [ '', 'low', 'middle', 'high']
    return (
        <React.Fragment>
            {options.map(option => (<option key={option}>{option}</option>))}
        </React.Fragment>
    )
}
const Status = () => {
    const options = ['', 'process', 'done', 'expired']
    return (
        <React.Fragment>
            {options.map(option => (<option key={option}>{option}</option>))}
        </React.Fragment>
    )
}
const Brigade = () => {
    const options = ['', 'First', 'Second', 'Third', 'Forth']
    return (
        <React.Fragment>
            {options.map(option => (<option key={option}>{option}</option>))}
        </React.Fragment>
    )
}
