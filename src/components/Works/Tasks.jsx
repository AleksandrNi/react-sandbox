import React, { useState, useContext } from 'react';
import {UseStateValue} from 'context/State'

export const Tasks = (props) => {
    const [inialState, dispatch] = UseStateValue();
    // console.log('inialState');
    // console.log(inialState);
    // console.log('dispatch');
    // console.log(dispatch);

    const createTaskMethod = () => dispatch({
        type: 'MODAL_CREATE_TASK_ON',
        payload: ''
    })

    return (
            <div className='tasks-container'>
                <div className='tasks-header'>
                    <div><p>Tasks</p></div>
                    <div className='tasks-header__logo'>
                        <div>
                            <i className="material-icons md-18">notifications_none</i>
                        </div>
                        <div>
                            <i className="material-icons md-18">person</i>
                        </div>
                    </div>
                </div>

                <div className='tasks-header__search-bar'>
                    <div className='tasks-header__search-bar__filters'>
                        <div>
                        <i className="material-icons md-18">assignment</i>
                        </div>
                        <div>
                        <i className="material-icons md-18">list_alt</i>
                        </div>
                        <div>
                        <i className="material-icons md-18">description</i>
                        </div>
                    </div>
                    <div className='tasks-header__search-bar__search'>
                        {/* <input type="text" onChange={  }/> */}
                    </div>
                    <div className='tasks-header__search-bar__search__total-result'>
                        <p>total tasks: 10</p>
                    </div>
                    <div className='tasks-header__search-bar__create-new-task'>
                        <div 
                        onClick={createTaskMethod}
                        className='tasks-header__search-bar__create-new-task__button'>
                            <i className="material-icons md-18">add_circle_outline</i>
                            <p>Create new task</p>
                        </div>
                    </div>
                </div>

                <div className='tasks-list'>
                    <div className='tasks-list__head'>
                        <div><p>Data</p></div>
                        <div><p>Number</p></div>
                        <div><p>Status</p></div>
                        <div><p>Task name</p></div>
                        <div><p>Priority</p></div>
                        <div><p>Brigade/Person</p></div>
                        <div><p>Object</p></div>
                    </div>
                    {/* <TasksList tasks={tasks}/> */}
                </div>

            </div>
    )
}

const TasksList = ({tasks}) => {
    return (
        <React.Fragment>
            {tasks.length && tasks.map(task=> {
                return (
                    <div 
                    key={task.id}
                    className='tasks-list__task'>
                        <div><p>{task.data}</p></div>
                        <div><p>{task.number}</p></div>
                        <div className='tasks-list__task__status'>{Status(task.status)}</div>
                        <div><p>{task.name}</p></div>
                        <div className='tasks-list__task__priority'>{Priority(task.priority)}</div>
                        <div><p>{task.brigade}</p></div>
                        <div><p>{task.object}</p></div>
                    </div>
                ) 
            })
            }
        </React.Fragment>
    )
}

const tempTasks = [
    {
        data: '05.10.2019',
        number: '1',
        status: 'green', // (green|orange|red)
        name: 'Some task name',
        priority: 'low', // (low|middle|high)
        brigade: 'brigade N1',
        object: 'Object 1',
        id: 1

    },
    {
        data: '03.11.2019',
        number: '2',
        status: 'orange', // (green|orange|red)
        name: 'New task name 2',
        priority: 'middle', // (low|middle|high)
        brigade: 'brigade N2',
        object: 'Object 1',
        id: 2

    },
    {
        data: '02.09.2019',
        number: '3',
        status: 'red', // (green|orange|red)
        name: 'Another task name',
        priority: 'high', // (low|middle|high)
        brigade: 'John',
        object: 'Object 4',
        id: 3

    },
    {
        data: '15.10.2019',
        number: '1',
        status: 'green', // (green|orange|red)
        name: 'Huge problem',
        priority: 'low', // (low|middle|high)
        brigade: 'Smith',
        object: 'Object 5',
        id: 4

    },
]

const Status = (status) => {
    let icon;
    let text;
    let customClass = 'material-icons md-18';

    switch (status) {
        case 'red':
            icon = 'schedule'
            text = 'expired'
            customClass += ' red'
            break;
        case 'orange':
            icon = 'navigate_next'
            text = 'process'
            customClass += ' orange600'
            break;
        case 'green':
            icon = 'done'
            text = 'done'
            customClass += ' green'
            break;

    default:
        break;
    }

    return (
        <React.Fragment>
            <i className={customClass}>{icon}</i>
            <p>{text}</p>
        </React.Fragment>
    )
}

const Priority = (priority) => {
    let customClass;
    switch (priority) {
        case 'low':
            customClass = 'green'  
            break;
        case 'middle':
            customClass = 'orange'
            break;
        case 'high':
            customClass = 'red'
            break;
    
        default:
            break;
    }

    return <span className={customClass}>{priority}</span>
}