import React, { useCallback } from 'react'
import SubDeskItems from './SubDeskItems';
import update from 'immutability-helper'
import { useDrop } from 'react-dnd/dist/hooks'
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToArr, actionSetNewArr } from '../../store/actions';
import { useState } from 'react';
import { useEffect } from 'react';

const SubDesk = ({ data }) => {
    const dispatch = useDispatch();
    const activeDesk = useSelector(state => state.cards.activeDesk)
    const [cards,setCards] = useState(data.items)
    const { name, items } = data;
    const [{ inside }, drop] = useDrop(() => ({
        accept: 'DragItem',
        collect: (monitor) => ({
            inside: monitor.isOver()
        }),
        drop: (_item, monitor) => {
            if (activeDesk === name) return
            dispatch(actionAddToArr(monitor.getItem(), name, activeDesk))
        }
    }),[activeDesk])

    useEffect(() => {
        dispatch(actionSetNewArr(cards,name))
    },[cards])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setCards((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
            ],
            }),
        )
    }, [])
    const renderCard = useCallback((item, index) => {
        console.log(item, index)
        return (
            <SubDeskItems key={item.info} data={item} name={name} index={index} moveCard={moveCard} />
        )
    }, [])


    return (
        <div className={inside ? 'sub-desk inside' : 'sub-desk'} ref={drop}>
            <h2>{name}</h2>
            <div className="sub-desk-items">
                {items?.map((item,i) => renderCard(item,i))}
            </div>
        </div>
    )
}

export default SubDesk;