import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { usePassContext } from '../context/PasswordContext';
import Swal from 'sweetalert2';

const FormRecordatorio = ({cerrarForm}) => {
    const classInputs = 'w-full  inputForm px-4 py-2 rounded-md my-2';
    const botonesForm = 'my-2 mx-10 bg-pink-800 text-white text-xl py-2 px-4  rounded-full'
    const {register, handleSubmit, reset,formState:{errors}} = useForm()

    
    const {createNewObjPass,cargando}= usePassContext()
    const cerrarFormulario = () =>{
        cerrarForm(false);
        reset({
          user:"",
          site:"",
          nameApp:"",
          email:"",
          password:""
      })
    }
    useEffect(() => {
      if(cargando){
        Swal.fire({
            title: 'Espere!',
            html: 'Cargando datos',
            allowOutsideClick:false,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
      }
    }, [cargando])
    
    const onSubmit = handleSubmit(async(values)=>{
        createNewObjPass(values)
        reset({
            user:"",
            site:"",
            nameApp:"",
            email:"",
            password:""
        })
      })
  return (
    <div className='p-3'>
        <form  
            onSubmit={onSubmit} 
            >
            
        
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" {...register('titulo',{required:false})} className={classInputs} placeholder='Nombre de usuario'/>
            
        

            <label htmlFor="descripcion">Descripcion:</label>
            <textarea {...register('descripcion',{required:true})} className={classInputs} rows="3"></textarea>
            
            <label htmlFor="tipo">Tipo de recordatorio:</label>
          
          
            <label htmlFor="fecha">Fecha</label>
            
         
            <div className='flex justify-center'>
                <button className={botonesForm} type="submit">Agregar</button>
                <button className={botonesForm} type="button" onClick={cerrarFormulario}>Cerrar</button>
            </div>
        </form>
        <hr className=" h-1 rounded-full my-3  bg-gray-200 border-0 dark:bg-pink-900"/>
    </div>
  )
}

export default FormRecordatorio