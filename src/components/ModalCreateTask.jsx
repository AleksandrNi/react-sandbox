import React, { useEffect } from 'react'
import {UseStateValue} from 'context/State';

export const ModalCreateTask = () => {
    const [state, dispatch] = UseStateValue();
    // console.log('state');
    // console.log(state);
    //     console.log('dispatch');
    //     console.log(dispatch);

    const modalCreateTaskClass = state.displayModalCreateTask
        ? 'modal-create-task' 
        : 'modal-create-task-disabled';

    const closeModalCreateTask = () => dispatch({
        type: 'MODAL_CREATE_TASK_OFF',
        payload: ''
    })

    const clickOutside = (event)=> {
        
        const target = event.target;

        if( !target.closest('#modalCreateMask') && state.displayModalCreateTask ) {
            closeModalCreateTask()
        }
    }
    
    useEffect(()=> {        
        document.addEventListener('click', clickOutside)

        return () => document.removeEventListener('click', clickOutside)
        
    })



    return (
        <div className={modalCreateTaskClass} id='modalCreateMask' >
            <div className='modal-create-task__wrapper'>
                <div className='modal-create-task__head'>
                    <p>Task</p>
                    <div 
                    onClick={closeModalCreateTask}
                    className='modal-create-task__head__close'>
                        <i className="material-icons md-18">close</i>
                    </div>
                </div>

                <div className='wrapper-column'>
                    <div className='modal-create-task__container'>
                        <div className='modal-create-task__container__first' >
                            {/* <div className='modal-create-task__container__first__header'><p>Header</p></div> */}
                            <div className='modal-create-task__container__first__image'>
                                <img src="https://picsum.photos/400/200" alt=""/>
                            </div>
                            <div className='modal-create-task__container__first__body'>
                                <div className='modal-create-task__container__first__body__meta'>
                                    <div className='modal-create-task__container__first__body__priority'>
                                            LOW
                                    </div>
                                    <div className='modal-create-task__container__first__body__data'>
                                            29.11.2019
                                    </div>
                                </div>
                                <div className='modal-create-task__container__first__body__name'>
                                    Task name
                                </div>

                                <div className='modal-create-task__container__first__body__status'>
                                    <div>
                                    <select name="status" id="taskStatus">
                                        <option value=""></option>                                    </select>
                                    </div>
                                    <div className='modal-create-task__container__first__body__time'>
                                        <p>timeButton</p>
                                    </div>
                                </div>

                                <div className='modal-create-task__container__first__body__task-details'>
                                    <div className='modal-create-task__container__first__body__title'>
                                        <p>category</p>
                                        <p>equipment</p>
                                        <p>brigade</p>
                                        <p>brigadier</p>
                                        <p>date</p>
                                        <p>price</p>
                                        <p>completed</p>
                                    </div>
                                    <div className='modal-create-task__container__first__body__text'>
                                        <p>Hurt</p>
                                        <p>Crane</p>
                                        <p>N1</p>
                                        <p>John Smith</p>
                                        <p>04.10.2019</p>
                                        <p>1500</p>
                                        <p>05.10.2019</p>
                                    </div>

                                </div>

                            </div>
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