import React from 'react'
import { Link } from 'react-router-dom'

export default function Registros() {
  return (
    <div className='w-full flex justify-center'>
      <h2>Todos los registros</h2>
      <h2><Link to="registro/nuevo" className='rounded-md bg-indigo-600 p3 font-bold text-white shadow-sm hover:bg-indigo-500'>Agregar Registro</Link></h2>
    </div>
  )
}
