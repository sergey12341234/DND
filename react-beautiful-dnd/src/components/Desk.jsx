import { DragDropContext } from 'react-beautiful-dnd'
import SubDesk from './SubDesk'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { actionMoveItem } from '../store/actions'


const onDragEnd = (result,dispatch) => {
    dispatch(actionMoveItem(result))
}

const Desk = () => {
    const сolumnsFromBackEnd = useSelector(state => state.cards)
    const dispatch = useDispatch();
    
    return (
        <div className='desk'>
            <DragDropContext onDragEnd={result => onDragEnd(result, dispatch)}>
                {сolumnsFromBackEnd.length > 0 && сolumnsFromBackEnd.map((item) => <SubDesk key={item.id} item={item}/>) }
            </DragDropContext>
        </div>
    )
}

export default Desk