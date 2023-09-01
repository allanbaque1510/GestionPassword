import React, { useState } from 'react'
import { BiSolidBellPlus } from "react-icons/bi";
import FormRecordatorio from './FormRecordatorio';
const Recordatorios = () => {
  const [openForm, setOpenForm] = useState(false)

  const cerrarForm=(valor)=>{
    setOpenForm(valor)
  }
  
  return (
    <div>
      <h1 className='text-center m-4 text-3xl font-bold'>Recordatorios</h1>
      <button 
          type="button" 
          className='mx-10 bg-pink-700 font-semibold flex items-center
          gap-x-2 cursor-pointer text-white p-2 rounded-xl hover:bg-pink-500 duration-150'
          onClick={()=>{setOpenForm(true)}}
          >
            <BiSolidBellPlus/> 
            Agregar recordatorio
      </button>
      <hr className=" h-1 rounded-full my-3 mx-2 bg-gray-200 border-0 dark:bg-pink-900"/>
      <div className={` duration-300 ${!openForm && "scale-0 h-0"}`}>
          <FormRecordatorio cerrarForm={cerrarForm}/>
      </div>
      
    </div>
  )
}

export default Recordatorios