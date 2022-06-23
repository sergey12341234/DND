import React, { useState } from 'react'
import { useDrag } from 'react-dnd/dist/hooks'
import { useDispatch } from 'react-redux/es/exports';
import { actionDeleteFromArr,actionSetActiveDesk } from '../../store/actions';
const SubDeskItems = ({ data, name }) => {
    const dispatch = useDispatch();
    const [collect, drag, dragPreview] = useDrag(() => ({
        type: 'DragItem',
        item: data,
        // end: (_item,monitor) => {
        //     if(monitor.didDrop()) {
        //         dispatch(actionDeleteFromArr(data.info,name))
        //     }
        // }
    }))
    // const click = () => dispatch(actionDeleteFromArr('first','some text 1',data,'second'))
    return (
        <div onMouseDown={() => dispatch(actionSetActiveDesk(name))} className='sub-desk-item' ref={drag}>
            { data.info }
        </div>
    )
}

export default SubDeskItems