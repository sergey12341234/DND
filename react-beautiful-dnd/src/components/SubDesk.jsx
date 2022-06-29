import React, { useCallback, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../helpers/help';
import { actionAddItem } from '../store/cardsSlice';
import Modal from './modal/Modal';
import SubDeskItem from './SubDeskItem';
import uuid from 'uuid/v4';
import { selectorColumns, selectorState } from '../store/selectors';


const SubDesk = ({ items, deskName }) => {
    const [modalActive, setModalActive] = useState(false);
    const [itemTitle, setItemTitle] = useState('');
    const [itemPriority, setItemPriority] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const desks = useSelector(selectorColumns);
    const state = useSelector(selectorState);
    const dispatch = useDispatch();
    const addNewItem = useCallback((itemToAdd) => {
        dispatch(actionAddItem(addItem({ state, itemToAdd })));
    }, [deskName, state]);
    return (
        <div className='sub-desk'>
            <h2>{deskName} </h2>
            <Droppable droppableId={deskName}>
                {(provided, snapshot) => {
                    return (
                        <div
                            className='sub-desk-dnd'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                backgroundColor: snapshot.isDraggingOver ? '#5a5a5a' : '#252525',
                            }}
                        >
                            {items.map((item, index) => <SubDeskItem key={item.id} item={item} index={index} />)}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
            <button onClick={() => setModalActive(true)}>Add item</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2>Add item</h2>
                <input value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} type='text' placeholder='input title' />
                <input value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} type='text' placeholder='input description' />
                <input value={itemPriority} onChange={(e) => setItemPriority(e.target.value)} type='text' placeholder='input priority' />
                <button onClick={() => {
                    addNewItem({ id: uuid(), title: itemTitle, description: itemDescription, priority: itemPriority ,status: { 
                        status: deskName, order: desks[deskName].filter(item => item.status.status === deskName).length 
                    } });
                    setModalActive(false);
                }}>Add item</button>
                <button onClick={() => setModalActive(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default SubDesk;