import { createSelector } from '@reduxjs/toolkit';


export const mainStateSelector = state => state.cards;

export const selectorMainState = createSelector(
    [mainStateSelector],
    (mainState) => mainState,
);