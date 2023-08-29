import React, { useEffect } from 'react'
import { usePassContext } from '../context/PasswordContext'
import { useAuth } from '../context/AuthContext';
const Inicio = () => {
    const {viewAllPass}= usePassContext();   
    const {user} = useAuth()
    useEffect(() => {
      viewAllPass()
    }, [])
     
    return (
        <div className=' bg-pink-100 h-screen rounded-xl py-3'>
            <h1 className=' text-center text-4xl font-bold'>Panel de contraseñas de {user.username}</h1>
            <div className='flex justify-between'>
              <button type="button" className='mx-10'>Ver contraseñas</button>
              <button type="button" className='mx-10'>Añadir nueva contraseña</button>
            </div>
            

            
        </div>
    )
}

export default Inicio