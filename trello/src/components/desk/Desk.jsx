import React, { useEffect, useState } from 'react'
import SubDesk from './SubDesk'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetCarts } from '../../store/actions';

const Desk = () => {
    const desks = useSelector(state => state.cards.data)


    return (
        <div className='desk'>
            <h1>Trello Copy</h1>
            <div className="desks">
                {desks.length > 0 && desks.map(item => <SubDesk key={item.id} data={item}/>)}
            </div>
        </div>
    )
}

export default Desk