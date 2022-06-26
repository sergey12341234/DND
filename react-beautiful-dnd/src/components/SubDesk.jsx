import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import SubDeskItem from './SubDeskItem'


const SubDesk = ({ id, value }) => {
    return (
        <div className='sub-desk'>
            <h2>{ value.content } </h2>
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
                            { value.items.map((item,index) => <SubDeskItem key={item.id} item={item} index={index} />) }
                            {provided.placeholder}
                        </div>
                    )
                } }
            </Droppable>
        </div>
    )
}

export default SubDesk