import { Route, Routes } from 'react-router-dom';
import { CantantesPage } from '../pages/Cantantes.Page';


export const AppRouter = () => {
    
    return (
        <Routes>
            <Route path='/' element={<CantantesPage/>} />
        </Routes>
    );
};