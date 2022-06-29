import React, { useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateItem } from '../helpers/help';
import { actionUpdateItem } from '../store/cardsSlice';
import { selectorState } from '../store/selectors';

const SubDeskItem = ({ item, index }) => {
    const { id, title, description, status, priority } = item;
    const dispatch = useDispatch();
    const state = useSelector(selectorState);
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newPriority, setNewPriority] = useState(priority);
    const itemUpdate = useCallback((itemToUpdate) => {
        dispatch(actionUpdateItem(updateItem({ state,itemToUpdate })));
    });

    return (
        <Draggable key={id} draggableId={id} index={index} >
            { 
                (provided, snapshot) => {
                    return edit ? 
                    (
                        <div
                            className='sub-desk-item'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                userSelect: 'none',
                                backgroundColor: snapshot.isDragging ? '#3b3b3b' : '#4c4c4c',
                                ...provided.draggableProps.style
                            }}
                        >
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(() => e.target.value)}   placeholder='title'/>
                            <input type="text" value={newDescription} onChange={(e) => setNewDescription(() => e.target.value)}   placeholder='description'/>
                            <input type="text" value={newPriority} onChange={(e) => setNewPriority(() => e.target.value)}   placeholder='priority'/>
                            <button 
                            className="save"
                            onClick={() => {
                                itemUpdate({ id, title: newTitle, description: newDescription, status, priority: newPriority });
                                setEdit(prev => !prev);
                            }}
                            >
                                SAVE
                            </button>
                            <i 
                            className='material-icons icon'
                            onClick={(e) => {
                                e.stopPropagation();
                                setEdit(prev => !prev);
                            }}
                            >
                                edit
                            </i>
                        </div>
                    ) : 
                    (
                        <div
                            className='sub-desk-item'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                userSelect: 'none',
                                backgroundColor: snapshot.isDragging ? '#3b3b3b' : '#4c4c4c',
                                ...provided.draggableProps.style
                            }}
                        >
                            <h3>{title}</h3>
                            <div className='sub-desk-item__description'>
                                <p> {description} </p>
                            </div>
                            <div className="sub-desk-item__info">
                                <div className="status">
                                    {status.status}
                                </div>
                                <div className="priority">
                                    {priority}
                                </div>
                            </div>
                            <i 
                            className='material-icons icon'
                            onClick={(e) => {
                                e.stopPropagation();
                                setEdit(prev => !prev);
                            }}
                            >
                                edit
                            </i>
                        </div>
                    );                    
                }
            }
        </Draggable>
    );
};

export default SubDeskItem;