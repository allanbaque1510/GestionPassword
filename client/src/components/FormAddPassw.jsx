import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { usePassContext } from '../context/PasswordContext';

const FormAddPassw = ({cerrarForm}) => {
    const classInputs = 'w-full  inputForm px-4 py-2 rounded-md my-2';
    const botonesForm = 'my-2 mx-10 bg-pink-800 text-white text-xl py-2 px-4  rounded-full'
    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const {user} = useAuth()
    const {createNewObjPass}= usePassContext()
    const cerrarFormulario = () =>{
        cerrarForm(false);
    }
    const onSubmit = handleSubmit(async(values)=>{
        createNewObjPass(values)
      })
  return (
    <div className='p-3'>
        <form  
            onSubmit={onSubmit} 
            >
            
        
            <label htmlFor="user">Usuario:</label>
            <input type="text" {...register('user',{required:false})} className={classInputs} placeholder='Nombre de usuario'/>
            
            <label htmlFor="site">URL:</label>
            <input type="text" {...register('site',{required:false})} className={classInputs} placeholder='Url de la pagina'/>
            
             <label htmlFor="nameApp">Nombre de la pagina o aplicacion:</label>
            <input type="text" {...register('nameApp',{required:false})} className={classInputs} placeholder='Nombre de la pagina o aplicacion'/>
            

            <label htmlFor="email">Corre electronico:</label>
            <input type="email" {...register('email',{required:false})} className={classInputs} placeholder='Correo electronico'/>
   
            
            <label htmlFor="password">Contraseña:</label>
            <input type="text" {...register('password',{required:true})} className={classInputs} placeholder='Contraseña'/>
            
            <div className="boxMessage">
            {errors.password && <p>Contraseña es requerido</p> }
            </div>
            <div className='flex justify-center'>
                <button className={botonesForm} type="submit">Agregar</button>
                <button className={botonesForm} type="button" onClick={cerrarFormulario}>Cerrar</button>
            </div>
        </form>
        <hr className=" h-1 rounded-full my-3  bg-gray-200 border-0 dark:bg-pink-900"/>
    </div>
  )
}

export default FormAddPassw