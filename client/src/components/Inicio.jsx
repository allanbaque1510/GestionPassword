import React, { useEffect, useState } from 'react'
import { usePassContext } from '../context/PasswordContext'
import { useAuth } from '../context/AuthContext';
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import FormAddPassw from './FormAddPassw';
const Inicio = () => {
  const [openForm, setOpenForm] = useState(false)
    const {viewAllPass,objPasswords,objPassword}= usePassContext();   
    const {user} = useAuth()

    const cerrarForm=(valor)=>{
      setOpenForm(valor)
    }
    useEffect(() => {
      viewAllPass()
    }, [objPassword])
     
    return (
        <div className=' bg-pink-100 h-screen rounded-xl py-3 overflow-auto'>
            <h1 className=' text-center text-4xl font-bold'>Panel de contraseñas de {user.username}</h1>
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
               <ul>
                {objPasswords.map((pass,index)=>(
                   <li key={index}>
                    {pass.email}
                    {pass.nameApp}
                    {pass.site}
                    {pass.password}
                    {pass.user}
                   </li> 
                  ))}
                  </ul>
             </div>

            </div>


        </div>
    )
}

export default Inicio