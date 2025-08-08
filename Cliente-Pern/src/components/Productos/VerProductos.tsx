type Producto = {
  name: string;
  price: number;
  availability: boolean;
};

export default function VerProductos() {
  const productos: Producto[] = []; // Por ahora está vacía

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Lista de Productos
        </h2>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3">Producto</th>
              <th className="px-6 py-3">Precio</th>
              <th className="px-6 py-3">Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              productos.map((producto, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{producto.name}</td>
                  <td className="px-6 py-4">${producto.price}</td>
                  <td className="px-6 py-4">
                    {producto.availability ? "Disponible" : "Agotado"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
