import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../helpers/help'
import { actionAddItem } from '../store/cardsSlice'
import Modal from './modal/Modal'
import SubDeskItem from './SubDeskItem'
import uuid from 'uuid/v4'


const addNewItem = (dispatch,id,state,itemToAdd) => {
    dispatch(actionAddItem(addItem({id,state,itemToAdd})))
}

const SubDesk = ({ item }) => {
    const [modalActive, setModalActive] = useState(false)
    const [itemContent, setItemContent] = useState('')
    const state = useSelector(state => state.cards)
    console.log()
    const { content, items, id } = item
    const dispatch = useDispatch()
    return (
        <div className='sub-desk'>
            <h2>{ content } </h2>
            <Droppable droppableId={id}>
                { (provided,snapshot) => {
                    return (
                        <div
                        className='sub-desk-dnd'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                backgroundColor: snapshot.isDraggingOver ? '#5a5a5a' : '#252525',
                            }}
                        >
                            { items.map((item,index) => <SubDeskItem key={item.id} item={item} index={index} />) }
                            {provided.placeholder}
                        </div>
                    )
                } }
            </Droppable>
            <button onClick={() => setModalActive(true)}>Add item</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2>Add item</h2>
                <input value={itemContent} onChange={(e) => setItemContent(e.target.value)} type="text" placeholder='input content'/>
                <button onClick={() => {
                    addNewItem(dispatch, id,state, { id: uuid(), content: itemContent })
                    setModalActive(false)
                }}>Add item</button>
                <button onClick={() => setModalActive(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default SubDesk