import { ButtonAdd } from '../components/buttons';
import { Navbar } from '../components/ui';


export const BannerLayout = ({ children }) => {

    const handleAddCantante = () => {
        console.log('Añadir Cantante');
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <Navbar />
            <div className='w-full h-full p-4'>
                <ButtonAdd onClick={handleAddCantante} />
                {children}
            </div>
        </div>
    );
};