import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioProducto from './components/Productos/FormularioProductos'
import VerProductos from './components/Productos/VerProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full flex justify-center'>
      <h1 className='text-4xl text-center'> Hola apReprobados</h1>
    </div>
    <FormularioProducto></FormularioProducto>
    <VerProductos></VerProductos>
    </>
  )
}

export default App
