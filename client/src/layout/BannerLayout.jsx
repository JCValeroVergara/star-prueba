import { useState } from 'react';
import { ButtonAdd } from '../components/buttons';
import { Navbar } from '../components/ui';
import { AddCantanteForm } from '../components/forms';


export const BannerLayout = ({ children }) => {
    const [showAddCantante, setShowAddCantante] = useState(false);

    const handleAddCantante = () => {
        setShowAddCantante(true);
    };

    const handleCloseAddCantante = () => {
        setShowAddCantante(false);
    };

    return (
        <>
            {showAddCantante && <AddCantanteForm formTitle='Agregar Cantante' onClose={handleCloseAddCantante} />}
            <div className='w-full h-screen flex flex-col items-center justify-center'>
                <Navbar />
                <div className='w-full h-full p-4'>
                    <ButtonAdd onClick={handleAddCantante} />
                    {children}
                </div>
            </div>
        </>
    );
};