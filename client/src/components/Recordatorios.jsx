import React, { useEffect, useState } from 'react'
import { BiSolidBellPlus } from "react-icons/bi";
import FormRecordatorio from './FormRecordatorio';
import { usePassContext } from '../context/PasswordContext';
import { FaRegEdit,FaRegTrashAlt} from "react-icons/fa";
import Swal from 'sweetalert2';
const Recordatorios = () => {
  const [openForm, setOpenForm] = useState(false)
  const {viewAllRecord,objRecords,objRecord,deleteRecordatorio,borrarRecord}= usePassContext();   

  const cerrarForm=(valor)=>{
    setOpenForm(valor)
  }
  useEffect(() => {
    viewAllRecord()
  }, [borrarRecord,objRecord])


  const formatearFecha = (valor) =>{
    const fechaMg = new Date(valor)
    const data ={
      dia:fechaMg.getDate(),
      mes:fechaMg.getMonth()+1,
      año:fechaMg.getFullYear(),
      hora:fechaMg.getHours(),
      minuto:fechaMg.getMinutes(),
      segundo:fechaMg.getSeconds(),

    }
    return data
  }
  const borrarRecordatorio = (id) =>{
    Swal.fire({
      title: 'Eliminar dato',
      text: "Estas seguro que deseas eliminar esta credencial",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si quiero!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecordatorio(id)
      }
    }) 
  }


  return (
    <div className=' h-screen scrollBar overflow-auto'>
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
      {objRecords.length >0?
        <section className="duration-300">
        {objRecords.map((record,index)=>(
          <article  style={(record.fondo?{
            backgroundImage:`url(./src/img/gatitos/${record.fondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize:'contain',
            backgroundColor:`${record.color}`
            }:{backgroundColor:'#fff'})} 
              className=' my-2 relative w-full  rounded-xl p-2' 
              key={index}
          >
            <span className='flex justify-center'>
            <h5 className=' text-2xl font-bold w-3/4'>{record.titulo}</h5>
            <span className='flex w-1/4 duration-200 justify-center'>
                <button type="button" className='duration-200 mx-3 py-1 px-2 rounded-xl hover:bg-pink-600 hover:text-white'><FaRegEdit/> </button>
                <button type="button" onClick={()=>borrarRecordatorio(record._id)} className='duration-200 mx-3 py-1 px-2 rounded-xl hover:bg-red-700 hover:text-white'><FaRegTrashAlt/> </button>
            </span>
            </span>
            <p className=''>{record.descripcion}</p>
            {record.fecha !== null && record.fecha.length >0?
            <p className=' mt-2'> <b>Fecha asignada:</b> <span className=' italic'>{formatearFecha(record.fecha).dia+"/"+formatearFecha(record.fecha).mes+"/"+formatearFecha(record.fecha).año}</span></p>:null }
            {record.tipo === 0?null:(
              record.tipo === 1?<p><b>Recordar:</b> Diariamente</p>
              :
              (record.tipo === 2?<p><b>Recordar:</b> Semanalmente</p>
              :
              (record.tipo === 3?<p><b>Recordar:</b> Mensualmente</p>:
              (record.tipo === 4?<p><b>Recordar:</b> Diariamente</p>:null)))
              )}
            <p className='absolute bottom-0 right-1  select-none text-gray-600 sombraBlanca font-bold  text-sm'>{formatearFecha(record.createdAt).dia+"/"+formatearFecha(record.createdAt).mes+'/'+formatearFecha(record.createdAt).año}</p>
          </article>
        ))} 
        
        </section>
      : 
      <p className='text-center text-xl italic'>No hay contraseñas registradas</p>
      }
      
    </div>
  )
}

export default Recordatorios