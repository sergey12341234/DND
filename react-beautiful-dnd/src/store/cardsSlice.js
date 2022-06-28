import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../mocks/initialState';
const cardsSlice = createSlice({
    name: 'cards',
    initialState: INITIAL_STATE,
    reducers: {
        actionMoveItem(state,action) {
            state = [...action.payload];
            return state;
        },
        actionAddItem(state,action) {
            state = [...action.payload];
            return state;
        }
    }
});

export const { actionMoveItem, actionAddItem } = cardsSlice.actions;

export default cardsSlice.reducer;