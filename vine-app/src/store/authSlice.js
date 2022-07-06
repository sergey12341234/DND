import { createSlice } from '@reduxjs/toolkit';
import { MOCK_DATA_AUTH } from '../Mocks/initialState';

const authSlice = createSlice({
    name: 'auth',
    initialState: MOCK_DATA_AUTH,
    reducers: {
        actionRegister(state,action) {
            if(state.users.some(item => item.email === action.payload.email)) return state;
            state.auth = { ...action.payload };
            state.users.push({ ...action.payload });
            return state;
        },
        actionLogin(state,action) {
            const auth = state.users.find(item => (item.email === action.payload.email && item.password === action.payload.password));
            if(auth) {
                state.auth.user = { ...auth };
                return state;
            }
            return state;
        },
    }
});

export const { actionRegister, actionLogin } = authSlice.actions;

export default authSlice.reducer;