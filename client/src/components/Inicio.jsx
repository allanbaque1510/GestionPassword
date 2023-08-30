import React, { useEffect, useState } from 'react'
import { usePassContext } from '../context/PasswordContext'
import { useAuth } from '../context/AuthContext';
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaEye,FaEyeSlash ,FaCopy} from "react-icons/fa6";
import FormAddPassw from './FormAddPassw';
const Inicio = () => {
  const [openForm, setOpenForm] = useState(false)
    
    const {viewAllPass,objPasswords,objPassword}= usePassContext();   
    const {user} = useAuth()

    const cerrarForm=(valor)=>{
      setOpenForm(valor)
    }
    const mostrarContraseña = (value) =>{
      var tipo = document.getElementById(value);
      if(tipo.type == "password"){
        tipo.type = "text";
      }else{
          tipo.type = "password";
      }
    }

    const copiarCredencial  = (value) =>{
      navigator.clipboard.writeText(value)
    }
    useEffect(() => {
      viewAllPass()
    }, [objPassword])
   
    return (
        <div className=' bg-pink-100 h-screen rounded-xl py-3 overflow-auto'>
            <h1 className=' text-center text-4xl font-bold'>Panel de credenciales de {user.username}</h1>
            <div className=''>
              <button 
                type="button" 
                className='mx-10 bg-pink-700 font-semibold flex items-center
                gap-x-2 cursor-pointer text-white p-2 rounded-xl hover:bg-pink-500 duration-150'
                onClick={()=>{setOpenForm(true)}}
               >
              <BsFillBookmarkPlusFill/> <span className='origin-left'>Añadir contraseña</span>
              </button>
            </div>
            <hr className=" h-1 rounded-full my-3 mx-2 bg-gray-200 border-0 dark:bg-pink-900"/>
            
            <div className=" m-3 rounded-xl">
            <div className={` duration-300 ${!openForm && "scale-0 h-0"}`}>
              <FormAddPassw cerrarForm={cerrarForm}/>
            </div>
             <div className="duration-300">
              {objPasswords.length > 0? 
               
               <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {objPasswords.map((pass,index)=>(
                  <li className=' bg-white m-2 rounded-xl max-w-lg p-2' key={index}>
                    <table className='table-fixed'>
                      <tbody>
                      {pass.nameApp.length > 0?<tr className=''><td className='labelPass'>Aplicacion: </td><td>{pass.nameApp}</td></tr>: null } 
                      {pass.email.length > 0?<tr className=''><td className='labelPass'>Correo: </td><td>{pass.email}</td></tr>: null } 
                      {pass.user.length > 0?<tr className=''><td className='labelPass'>Usuario: </td><td>{pass.user}</td></tr>: null } 
                      {pass.site.length > 0?<tr className=''><td className='labelPass'>URL: </td><td>{pass.site}</td></tr>: null } 
                      <tr className=''> 
                        <td className='labelPass'>Contraseña:</td> 
                        <td>
                        <input type="password" name="password-input" id={`password-input${index}`} value={pass.password} disabled />
                        </td>
                      </tr> 
                   
                        </tbody>
                      </table>

                      <span className='flex items-center'>
                        <button type="button" className=' flex items-center  gap-x-2 bg-pink-800 text-white p-2 m-2 rounded-xl hover:bg-pink-500 duration-150' onClick={()=>copiarCredencial(pass.password)}><FaCopy/> Copiar</button>
                        <button 
                          type="button" 
                          className=' bg-pink-800 text-white p-2 m-2 rounded-xl hover:bg-pink-500 duration-150 flex items-center gap-x-2' 
                          onClick={()=>{mostrarContraseña(`password-input${index}`)}}>
                            
                           <FaEye/>
                            Mostrar

                          </button>
                      </span>

                    
                   </li> 
                  ))}
                  </ul>
                  :
                  <div className='text-center text-xl italic'>No hay contraseñas registradas</div>
                }
             </div>

            </div>


        </div>
    )
}

export default Inicio