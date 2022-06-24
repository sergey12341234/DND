import { useDrag,useDrop } from 'react-dnd/dist/hooks'
import { useDispatch } from 'react-redux/es/exports';
import { actionSetActiveDesk } from '../../store/actions';
import { useRef } from 'react';
const SubDeskItems = ({ data, name,index,moveCard }) => {
    const ref = useRef(null)
    const dispatch = useDispatch();
    const [{Dragging}, drag] = useDrag(() => ({
        type: 'DragItem',
        item: {...data,index},
        collect: (monitor) =>  ({
            Dragging: !!monitor.isDragging(), 
        })
    }))

    const [{ handlerId }, drop] = useDrop({
        accept:'DragItem',
        collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        }
        },
        hover(item, monitor) {
        if (!ref.current) {
            return
        }
        const dragIndex = item.index
        const hoverIndex = index
        if (dragIndex === hoverIndex) {
            return
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        moveCard(dragIndex, hoverIndex)
        item.index = hoverIndex
    },
    })
    drag(drop(ref))
    return (
        <div 
        onMouseDown={() => dispatch(actionSetActiveDesk(name))}       
        className={Dragging ? 'sub-desk-item dragging' : 'sub-desk-item'} 
        ref={ref}
        data-handler-id={handlerId}
        >
            {data.info}
        </div>
    )
}

export default SubDeskItems