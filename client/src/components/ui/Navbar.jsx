import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <div className='w-4/5 h-20 text-gray-600 flex items-center justify-center'>
                <div className="flex items-center mr-4">
                    <ul className='flex flex-row space-x-20 text-xl'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold opacity-70' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold opacity-70' : 'font-bold'}>Drops</NavLink>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold opacity-70' : 'font-bold'}>Actividad</NavLink>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold opacity-70' : 'font-bold'}>Compañia</NavLink>
                    </ul>
                    <div className='ml-4'>
                        <button
                            className='w-48 h-14 text-gray-600 text-2xl font-bold opacity-70 px-4 py-2 rounded-xl ring-4 ring-yellow-400 transform translate-x-48 translate-y-4 hover:scale-105 transition-all duration-200'
                        >Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
};
