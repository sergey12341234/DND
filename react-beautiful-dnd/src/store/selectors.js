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
        items.map(item => columnsWithItems[item.status.status].push({ ...item, status: { ...item.status, order: columnsWithItems[item.status.status].length } }));
        return columnsWithItems;
    },
);

export const selectorState = createSelector(
    [state],
    (mainState) => mainState,
);