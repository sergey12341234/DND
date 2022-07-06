import { createSelector } from '@reduxjs/toolkit';


export const items = state => state.cards.items;
export const columns = state => state.cards.columns;
export const state = state => state.cards;

export const selectorColumns = createSelector(
    [columns,items],
    (columns,items) => {
        const columnsWithItems = {};
        columns.map(item => {
            columnsWithItems[item] ? columnsWithItems[item] = [] : columnsWithItems[item] = [];
        });
        items.forEach(item => columnsWithItems[item.status.status][item.status.order] = { ...item });
        return columnsWithItems;
    },
);

export const selectorState = createSelector(
    [state],
    (mainState) => mainState,
);