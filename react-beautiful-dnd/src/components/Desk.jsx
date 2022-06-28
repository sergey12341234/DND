import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import SubDesk from './SubDesk';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { changeArrWhenItemIsMove } from '../helpers/help';
import { actionMoveItem } from '../store/cardsSlice';
import { selectorColumns, selectorState } from '../store/selectors';

const Desk = () => {
    const сolumnsFromBackEnd = useSelector(selectorColumns);
    const currentState = useSelector(selectorState);
    const dispatch = useDispatch();
    const onDragEnd = useCallback((result, dispatch, state, currentState) => {
        dispatch(actionMoveItem(changeArrWhenItemIsMove(result, state, currentState)));
    },[сolumnsFromBackEnd]);

    return (
        <div className='desk'>
            <DragDropContext onDragEnd={result => onDragEnd(result, dispatch, сolumnsFromBackEnd, currentState)}>
                {Object.entries(сolumnsFromBackEnd).map(([deskName,items]) => <SubDesk key={deskName} deskName={deskName} items={items} />) }
            </DragDropContext>
        </div>
    );
};

export default Desk;