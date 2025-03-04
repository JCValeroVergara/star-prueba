import { createSlice } from '@reduxjs/toolkit';

export const cantantesSlice = createSlice({
    name: 'cantantes',
    initialState: {
        cantantes: [],
        totalCount: 0,
        loading: false,
        error: null,
    },
    reducers: {
        setCantantes: (state, action) => {
            state.cantantes = action.payload.cantantes;
            state.totalCount = action.payload.totalCount;
            state.loading = false;
            state.error = null;
        },
        addCantante: (state, action) => {
            state.cantantes.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        updatedCantante: (state, action) => {
            state.cantantes = state.cantantes.map((cantante) => cantante.id === action.payload.id ? action.payload : cantante);
            state.loading = false;
            state.error = null;
        },
        removeCantante: (state, action) => {
            state.cantantes = state.cantantes.filter((cantante) => cantante.id !== action.payload);
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { setCantantes, addCantante, updatedCantante, removeCantante, setLoading, setError } = cantantesSlice.actions;