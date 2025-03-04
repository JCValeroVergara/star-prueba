import { configureStore } from '@reduxjs/toolkit';
import { cantantesSlice } from './cantantes';

export const store = configureStore({
    reducer: {
        cantantes: cantantesSlice.reducer,
    },
});