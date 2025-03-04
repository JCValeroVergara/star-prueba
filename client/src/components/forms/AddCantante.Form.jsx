import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { AlertMessage } from '../ui';
import { StartAddCantante, StartUpdateCantante } from '../../store/cantantes/thunks';

const CantanteData = {
    nombre: '',
    genero: '',
    nacionalidad: '',
    edad: '',
    discos: '',
    canciones: '',
    activo: true,
};

const cantanteValidations = {
    nombre: [(value) => value.length > 0 || 'El nombre del cantante es requerido'],
    genero: [(value) => value.length > 0 || 'El género del cantante es requerido'],
    nacionalidad: [(value) => value.length > 0 || 'La nacionalidad del cantante es requerida'],
    edad: [(value) => value.length > 0 || 'La edad del cantante es requerida'],
    discos: [(value) => value.length > 0 || 'El número de discos del cantante es requerido'],
    canciones: [(value) => value.length > 0 || 'El número de canciones del cantante es requerido'],
};


export const AddCantanteForm = ({ formTitle, onClose, cantanteId }) => {
    const dispatch = useDispatch();
    const { cantantes, loading, error } = useSelector((state) => state.cantantes);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { nombre, genero, nacionalidad, edad, discos, canciones, activo, onInputChange, isFormValid, nombreValid, generoValid, nacionalidadValid, edadValid, discosValid, cancionesValid } = useForm(CantanteData, cantanteValidations);

    const isLoading = useMemo(() => loading, [loading]);

    useEffect(() => {
        if (cantanteId) {
            const cantante = cantantes.find((cantante) => cantante.id === cantanteId);
            if (cantante) {
                const { nombre, genero, nacionalidad, edad, discos, canciones, activo } = cantante;
                onInputChange({ target: { name: 'nombre', value: nombre } });
                onInputChange({ target: { name: 'genero', value: genero } });
                onInputChange({ target: { name: 'nacionalidad', value: nacionalidad } });
                onInputChange({ target: { name: 'edad', value: edad } });
                onInputChange({ target: { name: 'discos', value: discos } });
                onInputChange({ target: { name: 'canciones', value: canciones } });
                onInputChange({ target: { name: 'activo', value: activo } });
            }
        }
    }, [cantanteId, cantantes]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!isFormValid) return;

        if (cantanteId) {
            dispatch(StartUpdateCantante(cantanteId, { nombre, genero, nacionalidad, edad:Number(edad), discos:Number(discos), canciones:Number(canciones), activo }));
        } else {
            dispatch(StartAddCantante({ nombre, genero, nacionalidad, edad:Number(edad), discos:Number(discos), canciones:Number(canciones), activo }));
        }

        setIsSubmitting(false);
        onClose();
    }

    const buttonTitle = cantanteId ? 'Actualizar' : 'Agregar';

    return (
        <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="overflow-y-scroll flex flex-wrap fixed top-0 left-0 z-50 w-full h-full items-center justify-center">
            <div className="w-1/3 h-3/5 bg-white border-gray-700 rounded-lg shadow border p-5">
                <h2 className="mb-5 text-2xl font-semibold text-center">{formTitle}</h2>
                <form className="w-full h-full" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nombre"
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                            onChange={onInputChange}
                            value={nombre}
                            />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre
                        </label>
                        {/* Mensaje de error para el nombre */}
                        {nombreValid !== null && isSubmitting && <AlertMessage errorMsg={nombreValid} />}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="genero"
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onInputChange}
                            value={genero}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Genero
                        </label>
                        {/* Mensaje de error para el genero */}
                        {generoValid !== null && isSubmitting && <AlertMessage errorMsg={generoValid} />}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nacionalidad"
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onInputChange}
                            value={nacionalidad}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nacionalidad
                        </label>
                        {/* Mensaje de error para la nacionalidad */}
                        {nacionalidadValid !== null && isSubmitting && <AlertMessage errorMsg={nacionalidadValid} />}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="edad"
                            min={0}
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onInputChange}
                            value={edad}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Edad
                        </label>
                        {/* Mensaje de error para la nacionalidad */}
                        {edadValid !== null && isSubmitting && <AlertMessage errorMsg={edadValid} />}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="discos"
                            min={0}
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onInputChange}
                            value={discos}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Discos
                        </label>
                        {/* Mensaje de error para la nacionalidad */}
                        {discosValid !== null && isSubmitting && <AlertMessage errorMsg={discosValid} />}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="canciones"
                            className="block py-2.5 px-0 w-full text- text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onInputChange}
                            value={canciones}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Canciones
                        </label>
                        {/* Mensaje de error para el genero */}
                        {cancionesValid !== null && isSubmitting && <AlertMessage errorMsg={cancionesValid} />}
                    </div>
                    { cantanteId && (
                    <div className="flex items-center mb-5">
                        <input
                            type="checkbox"
                            name="activo"
                            id="activo"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            checked={activo}
                            onChange={(event) => onInputChange({ target: { name: 'activo', value: event.target.checked } })}
                        />
                        <label htmlFor="activo" className="ml-2 text-sm font-medium text-gray-900">
                            Activo
                        </label>
                    </div>
                    )}
                        {/* Mensaje de error del servidor */}
                        {error && <AlertMessage errorMsg={error} />}

                    <div className="relative z-0 w-full mb-5 group flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="text-white bg-blue-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-32 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-500 dark:focus:ring-blue-800"
                        >
                            {isLoading ? 'Cargando...' : buttonTitle}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white bg-blue-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-32 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
