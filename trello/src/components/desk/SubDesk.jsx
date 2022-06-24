import React from 'react'
import SubDeskItems from './SubDeskItems';
import { useDrop } from 'react-dnd/dist/hooks'
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToArr } from '../../store/actions';

const SubDesk = ({ data }) => {
    const dispatch = useDispatch();
    const activeDesk = useSelector(state => state.cards.activeDesk)

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
    return (
        <div className={inside ? 'sub-desk inside' : 'sub-desk'} ref={drop}>
            <h2>{name}</h2>
            <div className="sub-desk-items">
                {items?.map(item => <SubDeskItems key={item.info} data={item} name={name} />)}
            </div>
        </div>
    )
}

export default SubDesk;