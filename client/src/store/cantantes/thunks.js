import { addCantante, removeCantante, setCantantes, setError, setLoading, updatedCantante } from './cantantesSlice';

const URL = import.meta.env.VITE_API_URL;


export const StartLoadingCantantes = (offset = 0, limit = 15) => {

    return async (dispatch) => {
        dispatch(setLoading());

        try {
            const response = await fetch(`${URL}/cantantes?offset=${offset}&limit=${limit}`, {
                method: 'GET',
            });
            const data = await response.json();
            dispatch(setCantantes({ cantantes: data.cantantes, totalCount: data.totalCount }));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}

export const StartAddCantante = (cantanteData) => {

    return async (dispatch) => {
        dispatch(setLoading());

        try {
            const response = await fetch(`${URL}/cantantes`, {
                method: 'POST',
                body: JSON.stringify(cantanteData),
            });
            if (!response.ok) {
                throw new Error('Error al agregar cantante');
            }
            const newCantante = await response.json();
            dispatch(addCantante(newCantante));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}

export const StartUpdateCantante = (cantanteId, updateData) => {    
    return async (dispatch) => {
        dispatch(setLoading());

        try {
            const response = await fetch(`${URL}/cantantes/${cantanteId}`, {
                method: 'PUT',
                body: JSON.stringify(updateData),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar cantante');
            }
            const updateCantante = await response.json();
            dispatch(updatedCantante(updateCantante));
        } catch (error) {
            console.log('error', error);
            dispatch(setError(error));
        }
    };
}

export const StartDeleteCantante = (cantanteId) => {
    
    return async (dispatch) => {
        dispatch(setLoading());

        try {
            const response = await fetch(`${URL}/cantantes/${cantanteId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar cantante');
            }
            dispatch(removeCantante(cantanteId));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}