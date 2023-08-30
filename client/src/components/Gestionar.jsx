import React, { useEffect } from 'react'
import { usePassContext } from '../context/PasswordContext';

const Gestionar = () => {
  const {viewAllPass,objPasswords}= usePassContext();   
  useEffect(() => {
    viewAllPass()
  }, [])
 
  return (
    <div className='bg-pink-100 h-screen rounded-xl py-3 overflow-auto'>
      <h1 className='text-center m-4 text-3xl font-bold'>Gestionar credenciales</h1>
      <div className="flex flex-col justify-center">
        <table className='border-collapse border mx-20 border-pink-900'>
          <thead>
            <tr>
              <th className='border border-pink-900  text-white bg-pink-900'>App</th>
              <th className='border border-pink-900 text-white bg-pink-900'>Usuario</th>
              <th className='border border-pink-900 text-white bg-pink-900'>Email</th>
              <th className='border border-pink-900 text-white bg-pink-900'>Url</th>
              <th className='border border-pink-900 text-white bg-pink-900'>Contraseña</th>
              <th className='border border-pink-900 text-white bg-pink-900'>Acciones</th>
              
            </tr>
          </thead>
          <tbody>
            {objPasswords.map((obj,index)=>(
              <tr key={index}>
                <td className='border border-pink-100 max-w-lg px-2 bg-white' >{obj.nameApp}</td>
                <td className='border border-pink-100 max-w-lg px-2 bg-white' >{obj.user}</td>
                <td className='border border-pink-100 max-w-lg px-2 bg-white' >{obj.email}</td>
                <td className='border border-pink-100 max-w-lg px-2 bg-white' >{obj.site}</td>
                <td className='border border-pink-100 max-w-lg px-2 bg-white' >{obj.password}</td>
                <td className='border border-pink-100 max-w-lg px-2 bg-white text-center' >
                  <button className='p-1 px-4 mx-2 rounded bg-orange-400 text-white'>Editar</button>
                  <button className='p-1 px-4 mx-2 rounded bg-red-500 text-white'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Gestionar