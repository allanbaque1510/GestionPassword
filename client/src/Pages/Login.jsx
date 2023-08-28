import React from 'react'
import imgCerdito from '../img/cerdito.gif'
import { useForm } from 'react-hook-form'
const Login = () => {
  const classInputs = 'w-full  inputForm px-4 py-2 rounded-md my-2';
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = handleSubmit(async(values)=>{
      singup(values);
  })
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='back-boxForm max-w-md p-10 rounded-md'>

      <h1 className='text-2xl font-bold text-center'>Iniciar Sesion</h1>
      <div className="contImg">
        <img src={imgCerdito} className='imgCerdito'/>
      </div>
      <form  
        onSubmit={onSubmit} 
        >
        
       
        <label htmlFor="email">Corre electronico:</label>
        <input type="email" {...register('email',{required:true})} className={classInputs} placeholder='Correo electronico'/>
        
        <div className="boxMessage">
          {errors.email && <p>Email es requerido</p> }
        </div>
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password" {...register('password',{required:true})} className={classInputs} placeholder='Contraseña'/>
        
        <div className="boxMessage">
          {errors.password && <p>Contraseña es requerido</p> }
        </div>
       
        <button type="submit">Entrar</button>
      </form>
      </div>

    </div>
  )
}

export default Login