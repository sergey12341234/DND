import { createSelector } from '@reduxjs/toolkit';


const vine = state => state.vine;
const sort = state => state.sort.sort;

export const selectorSort = createSelector(
    [sort,vine],
    (sortStr,vineArr) => {
        const arr = [...vineArr];
        const result = arr.filter(item =>  {
            const includes = Object.entries(item).some(([, value]) => {
                if(typeof value === 'string') {
                    return value.toLowerCase().includes(sortStr.toLowerCase());
                }
            });
            return includes;
        });
        return result;
    }
);

export const selectorSortByPriceHighToLow = createSelector(
    [selectorSort],
    (vineArr) => {
        const arr = [...vineArr];
        const result = arr.sort((a,b) => {
            return b.price - a.price;
        });
        return result;
    },
);

export const selectorSortByPriceLowToHigh = createSelector(
    [selectorSort],
    (vineArr) => {
        const arr = [...vineArr];
        const result = arr.sort((a,b) => {
            return a.price - b.price;
        });
        return result;
    },
);

export const selectorVine = createSelector(
    [selectorSort],
    (mainState) => {
        console.log(mainState);
        return mainState;
    },
);