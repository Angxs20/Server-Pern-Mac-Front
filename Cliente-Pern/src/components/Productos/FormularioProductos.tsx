export default function FormularioProducto() {
  return (
    <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre - Producto
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Camiseta"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precio - Producto
          </label>
          <input
            type="number"
            id="price"
            placeholder="Ej: 250"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 
                     font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Añadir
        </button>
      </form>
    </div>
  );
}

