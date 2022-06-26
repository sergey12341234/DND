import { DragDropContext } from 'react-beautiful-dnd'
import SubDesk from './SubDesk'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { actionMoveItem } from '../store/actions'


const onDragEnd = async (result,dispatch) => {
    if(!result.destination) return;
    await dispatch(actionMoveItem(result))
}

const Desk = () => {
    const ColumnsFromBackEnd = useSelector(state => state.cards)
    const dispatch = useDispatch();


    return (
        <div className='desk'>
            <DragDropContext onDragEnd={result => onDragEnd(result, dispatch)}>
                { Object.entries(ColumnsFromBackEnd).map(([key,value]) => <SubDesk key={key} id={key} value={value}/>) }
            </DragDropContext>
        </div>
    )
}

export default Desk