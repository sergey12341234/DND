import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import SubDesk from './SubDesk';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { changeArrWhenItemIsMove } from '../helpers/help';
import { actionMoveItem } from '../store/cardsSlice';
import { selectorMainState } from '../store/selectors';

const Desk = () => {
    const сolumnsFromBackEnd = useSelector(selectorMainState);
    const dispatch = useDispatch();

    const onDragEnd = useCallback((result, dispatch, state) => {
        dispatch(actionMoveItem(changeArrWhenItemIsMove(result, state)));
    },[сolumnsFromBackEnd]);

    return (
        <div className='desk'>
            <DragDropContext onDragEnd={result => onDragEnd(result, dispatch, сolumnsFromBackEnd)}>
                {сolumnsFromBackEnd.length > 0 && сolumnsFromBackEnd.map((item) => <SubDesk key={item.id} item={item} />)}
            </DragDropContext>
        </div>
    );
};

export default Desk;