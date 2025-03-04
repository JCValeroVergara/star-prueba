import { setCantantes, setError, setLoading } from './cantantesSlice';

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