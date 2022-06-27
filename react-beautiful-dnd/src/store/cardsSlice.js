import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../components/Data/initialState';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: INITIAL_STATE,
    reducers: {
        actionMoveItem(state,action) {
            console.log(state)
            state.cards = [...action]
        },
        actionAddItem(state,action) {
            state.cards = [...action.payload]
        }
    }
});

export const { actionMoveItem, actionAddItem } = cardsSlice.actions;

export default cardsSlice.reducer;