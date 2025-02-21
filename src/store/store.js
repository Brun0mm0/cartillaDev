import {configureStore} from '@reduxjs/toolkit';
import { ReqResSlice } from './slices/ReqRes/ReqResSlice';

export const store = configureStore({
    reducer: { ReqRes: ReqResSlice.reducer }
})