import React, { useEffect, useState } from 'react';
import refreshIcon from '../../images/refresh.svg';
import sortIcon from '../../images/sort.svg';
import addIcon from '../../images/add.svg';
import VineTable from './VineTable';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectorSortByPriceHighToLow, selectorSortByPriceLowToHigh, selectorVine } from '../../store/selectors';
import { debounce } from '../utils/debounse';
import { actionNewSortData } from '../../store/sortSlice';

const VineList = () => {
    const vineList = useSelector(selectorVine);
    const dispatch = useDispatch();
    const sortedHighToLow = useSelector(selectorSortByPriceHighToLow);
    const sortedLowToHigh = useSelector(selectorSortByPriceLowToHigh);
    const [vineItems, setVineItems] = useState(vineList);
    const [isSort, setIsSort] = useState(false);
    const [sortStr, setSortStr] = useState('');
    const handleSetItemsHighToLow = () => {
        setIsSort('high');
        setVineItems(sortedHighToLow);
    };
    const handleSetItemsLowToHigh = () => {
        setIsSort('low');
        setVineItems(sortedLowToHigh);
    };
    const handleSort = () => {
        if(isSort === false) handleSetItemsHighToLow();
        if(isSort === 'high') handleSetItemsLowToHigh();
        if(isSort === 'low') handleSetItemsHighToLow();
    };
    const handleRefresh = () => setVineItems(vineList);
    const handleSortStr = (e) => debounce(setSortStr(e.target.value),500);

    useEffect(() => {
        dispatch(actionNewSortData(sortStr));
    },[sortStr]);

    return (
        <div className='vine'>
            <h1>Did somebody say wine?</h1>
            <p>
                This is were the wines that your virtual sommelier will recommend are kept, kind of <br/> 
                like a wine cellar! Manage, add, update and search your portfolio here 
            </p>
            <div className="searchAndSort">
                <div className="search">
                    <label htmlFor="searchInput">Search</label>
                    <input value={sortStr} onChange={handleSortStr} type="text" id='searchInput'/>
                </div>
                <div className="sort">
                    <div onClick={handleSort} className="sort-price">
                        <img src={sortIcon} alt="" />
                    </div>
                    <div onClick={handleRefresh} className="refresh">
                        <img src={refreshIcon} alt="" />
                    </div>
                    <div className="add">
                        <img src={addIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="table">
                <VineTable vineItems={vineItems} setVineItems={setVineItems} />
            </div>
        </div>
    );
};

export default VineList;