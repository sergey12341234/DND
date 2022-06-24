import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd/dist/hooks'
import { useDispatch } from 'react-redux/es/exports';
import { actionSetActiveDesk } from '../../store/actions';
const SubDeskItems = ({ data, name, index, moveItem, activeDesk }) => {
    const dispatch = useDispatch();
    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: 'DragItem',
        hover(item,monitor) {
            if(!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if(dragIndex === index) return;

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

            if(dragIndex > hoverIndex && hoverClientY < hoverMiddleY) return;
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })


    const [{Dragging}, drag] = useDrag(() => ({
        type: 'DragItem',
        item: {...data,index},
        collect: (monitor) =>  ({
            Dragging: monitor.isDragging()
        })
    }))
    drag(drop(ref))
    return (
        <div 
        onMouseDown={() => {
            dispatch(actionSetActiveDesk(name))
        }}  
        className={Dragging ? 'sub-desk-item dragging' : 'sub-desk-item'} 
        ref={ref}
        >
            {data.info}
        </div>
    )
}

export default SubDeskItems