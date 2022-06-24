import { useDrag } from 'react-dnd/dist/hooks'
import { useDispatch } from 'react-redux/es/exports';
import { actionSetActiveDesk } from '../../store/actions';
const SubDeskItems = ({ data, name }) => {
    const dispatch = useDispatch();
    const [{Dragging}, drag] = useDrag(() => ({
        type: 'DragItem',
        item: data,
        collect: (monitor) =>  ({
            Dragging: !!monitor.isDragging()
        })
    }))
    return (
        <div 
        onMouseDown={() => dispatch(actionSetActiveDesk(name))}       
        className={Dragging ? 'sub-desk-item dragging' : 'sub-desk-item'} 
        ref={drag}
        >
            {data.info}
        </div>
    )
}

export default SubDeskItems