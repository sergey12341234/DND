import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const SubDeskItem = ({ item, index }) => {
    return (
            <Draggable key={ item.id } draggableId={ item.id } index={index} >
                { (provided,snapshot) => {
                    return (
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
                            { item.content }
                        </div>
                    );
                }
                }
            </Draggable>
    );
};

export default SubDeskItem;