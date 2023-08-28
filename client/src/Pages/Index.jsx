import React from 'react'
import Listado from '../components/Listado'
import { useAuth } from '../context/AuthContext'

const Index = () => {
  const {user} = useAuth()
  console.log(user.username)
  return (
    <div className='flex h-screen items-center justify-center flex-col'>
      <h1 className='text-4xl font-bold'>Bienvenido {user.username}!</h1>
   
      <Listado/>
    </div>
  )
}

export default Index