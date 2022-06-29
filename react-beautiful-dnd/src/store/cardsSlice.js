import { createSlice } from '@reduxjs/toolkit';
import { MOCK_DATA } from '../mocks/initialState';
const cardsSlice = createSlice({
    name: 'cards',
    initialState: MOCK_DATA,
    reducers: {
        actionMoveItem(state,action) {
            state = { ...action.payload };
            return state;
        },
        actionAddItem(state,action) {
            state = { ...action.payload };
            return state;
        },
        actionUpdateItem(state,action) {
            state = { ...action.payload };
            return state;
        }
    }
});

export const { actionMoveItem, actionAddItem, actionUpdateItem } = cardsSlice.actions;

export default cardsSlice.reducer;