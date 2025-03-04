
export const ButtonAdd = ({onClick}) => {
    return (
        <button
            onClick={onClick}
            title="Añadir nuevo"
            className="absolute top-15 right-4 bg-blue-500  rounded-full hover:bg-green-500 shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
            <span className="flex justify-center items-center text-white text-center text-4xl transform -translate-y-0.5">
                +
            </span>
        </button>
    );
};
