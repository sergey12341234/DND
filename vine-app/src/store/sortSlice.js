import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
    name: 'sort',
    initialState: { sort: '' },
    reducers: {
        actionNewSortData(state,action) {
            state.sort = action.payload;
            return state;
        }
    }
});

export const { actionNewSortData } = sortSlice.actions;

export default sortSlice.reducer;