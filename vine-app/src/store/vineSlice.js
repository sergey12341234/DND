import { createSlice } from '@reduxjs/toolkit';
import { MOCK_DATA_VINE } from '../Mocks/initialState';

const authSlice = createSlice({
    name: 'vine',
    initialState: MOCK_DATA_VINE,
    reducers: {
    }
});

// export const { actionRegister, actionLogin } = authSlice.actions;

export default authSlice.reducer;