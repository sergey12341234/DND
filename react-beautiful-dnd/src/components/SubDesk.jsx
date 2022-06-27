import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { actionAddItem } from '../store/actions'
import SubDeskItem from './SubDeskItem'


const SubDesk = ({ item }) => {
    const { content, items, id } = item
    const dispatch = useDispatch()
    const action = () => dispatch(actionAddItem())
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
        </div>
    )
}

export default SubDesk