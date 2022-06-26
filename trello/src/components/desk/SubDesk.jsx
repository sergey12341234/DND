import React from 'react'
import SubDeskItems from './SubDeskItems';
import { useDrop } from 'react-dnd/dist/hooks'
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToArr, actionSetNewArr } from '../../store/actions';
import { useEffect } from 'react';
import { useState } from 'react';

const SubDesk = ({ data }) => {
    const dispatch = useDispatch();
    const { name, items } = data;
    const activeDesk = useSelector(state => state.cards.activeDesk)
    const [newItems, setNewItems] = useState(items || [])

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setNewItems(prevState => {
            const newItems = prevState.filter((item, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        })
    }

    useEffect(() => {
        dispatch(actionSetNewArr(activeDesk, newItems))
    }, [newItems])

    const [{ isOver, item }, drop] = useDrop(() => ({
        accept: 'DragItem',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            item: monitor.getItem()
        }),

    }), [activeDesk])
    useEffect(() => {
        if (activeDesk === name) return
        if(isOver) {
            delete item['index']
            dispatch(actionAddToArr(item, name, activeDesk))
        }
    }, [isOver])
    return (
        <div className={isOver ? 'sub-desk inside' : 'sub-desk'} ref={drop}>
            <h2>{name}</h2>
            <div className="sub-desk-items">
                {items?.map((item, index) => <SubDeskItems key={item.id} index={index} moveItem={moveItem} data={item} name={name} />)}
            </div>
        </div>
    )
}

export default SubDesk;