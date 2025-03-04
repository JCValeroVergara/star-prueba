import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StartLoadingCantantes } from '../store/cantantes/thunks';
import { Pagination } from './ui/Pagination';
import { Delete, PenEdit } from './icons';
import { AddCantanteForm } from './forms';
import { AlertDelete } from './ui';



export const CantantesTable = () => {
    const dispatch = useDispatch();
    const { cantantes, totalCount, loading, error } = useSelector((state) => state.cantantes);

    const [cantanteId, setCantanteId] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const limit = 15;
    const totalPages = Math.ceil(totalCount / limit);

    
    useEffect(() => {
        const offset = (currentPage - 1);
        dispatch(StartLoadingCantantes( offset, limit));
    }, [dispatch, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleEdit = (id) => {
        setCantanteId(id);
        setShowUpdateForm(true);
    }

    const handleDelete = (id) => {
        setCantanteId(id);
        setShowDeleteModal(true);
    }
    
    const handleOnClose = () => {
        setShowUpdateForm(false);
        setShowDeleteModal(false);
    }

    return (
        <>
            {showUpdateForm && <AddCantanteForm formTitle='Actualizar Cantante' onClose={handleOnClose} cantanteId={cantanteId} />}
            {showDeleteModal && <AlertDelete alertMessage='¿Estás seguro de eliminar el/la cantante?'  onClose={handleOnClose} cantanteId={cantanteId} />}
            <div className="overflow-x-auto p-4">
                <h1 className="text-2xl font-bold text-black mb-4">Cantantes</h1>
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Nombre</th>
                            <th className="p-2 border">Nacionalidad</th>
                            <th className="p-2 border">Edad</th>
                            <th className="p-2 border">Género</th>
                            <th className="p-2 border">Discos</th>
                            <th className="p-2 border">Canciones</th>
                            <th className="p-2 border">Activo</th>
                            <th className="p-2 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cantantes.map((cantante, index) => (
                            <tr key={cantante.id} className={index % 2 === 0 ? "bg-white text-gray-500 border-white" : "bg-blue-200 text-gray-500"}>
                                <td className="p-2 border text-center">{cantante.id}</td>
                                <td className="p-2 border">{cantante.nombre}</td>
                                <td className="p-2 border">{cantante.nacionalidad}</td>
                                <td className="p-2 border text-center">{cantante.edad}</td>
                                <td className="p-2 border">{cantante.genero}</td>
                                <td className="p-2 border text-center">{cantante.discos}</td>
                                <td className="p-2 border text-center">{cantante.canciones}</td>
                                <td className="p-2 border text-center">
                                    {cantante.activo ? "✅" : "❌"}
                                </td>
                                <td className="py-2 border text-center space-x-2">
                                    <button 
                                        title='Editar'
                                        onClick={() => handleEdit(cantante.id)} 
                                        className="p-2 bg-green-400 rounded-md border-gray-500 hover:bg-green-500 transition"
                                    >
                                        <PenEdit className="w-3 h-3 dark:invert" />
                                    </button>
                                    <button
                                        title='Eliminar'
                                        onClick={() => handleDelete(cantante.id)} 
                                        className="p-2 border bg-red-300 border-gray-400 rounded-md hover:bg-red-500 transition"
                                    >
                                        <Delete className="w-3 h-3 dark:invert" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
};
