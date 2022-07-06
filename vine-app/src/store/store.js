import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import sortSlice from './sortSlice';
import vineSlice from './vineSlice';
export default configureStore ({
    reducer: {
        auth: authSlice,
        vine: vineSlice,
        sort: sortSlice
    } 
});