import { createSlice } from '@reduxjs/toolkit';
import { MOCK_DATA_VINE } from '../Mocks/initialState';

const authSlice = createSlice({
    name: 'vine',
    initialState: MOCK_DATA_VINE,
    reducers: {
        actionAddVine(state,action) {
            return [...state, action.payload];
        }
    }
});

export const { actionAddVine } = authSlice.actions;

export default authSlice.reducer;