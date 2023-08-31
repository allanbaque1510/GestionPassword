import { createContext, useContext, useState } from "react";
import { getAllObjects,getObject,modifyObject,createObject, deleteObject } from "../api/passwords";
import Swal from 'sweetalert2'
const passContext = createContext()

export const usePassContext = ()=>{
    const context = useContext(passContext)
    if(!context){
        throw new Error("usePassContext no se encuentra dentro de un provider")
    }
    return context;
} 

export function PassProvider({children}){
    const [objPasswords, setObjPasswords] = useState([])
    const [objPassword, setObjPassword] = useState([])
    const [borrarPass, setBorrarPass] = useState(false)

    const viewAllPass = async()=>{
        const res = await getAllObjects();
        setObjPasswords(res.data)
      
    } 
    const createNewObjPass = async(data)=>{
        try {
            const res = await createObject(data)
            setObjPassword(res.data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                width:200,
                text: 'Contraseña guardada exitosamente',
                showConfirmButton: false,
                timer: 1500,
                backdrop:false
              })
        } catch (error) {
            console.log(error.response.data[0])
            if(error.response.data[0])
            return Swal.fire({
                position: 'top-end',
                icon: 'error',
                width:200,
                text: error.response.data[0],
                showConfirmButton: false,
                timer: 1500,
                backdrop:false
            })
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                width:200,
                text: error.message,
                showConfirmButton: false,
                timer: 1500,
                backdrop:false})
            
        }

    }
    const updateObj = async(data)=>{
        try {
            const res = await modifyObject(data)
            setObjPassword(res.data)
            Swal.fire({
                icon: 'success',
                title: "Datos actualizados exitosamente",
                showConfirmButton: false,
                timer: 1700,
            })
            console.log(res)
        } catch (error) {
            if(error.response.data[0])
            return Swal.fire({
                icon: 'error',
                title: error.response.data[0],
                showConfirmButton: false,
                timer: 1500,
            })
            Swal.fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500,
            })
            
        }
    }
    const deleteObj = async(data)=>{
        try {
            const res = await deleteObject(data)
            if(res.status === 204){
                setBorrarPass(!borrarPass)
            }
            Swal.fire({
                icon: 'success',
                title: "Credencial eliminada",
                showConfirmButton: false,
                timer: 1700,
            })
        } catch (error) {
            if(error.response.data[0])
            return Swal.fire({
                icon: 'error',
                title: error.response.data[0],
                showConfirmButton: false,
                timer: 1500,
            })
            Swal.fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500,
            })
        }
        
    }


    return(
        <passContext.Provider value={{
            createNewObjPass,
            viewAllPass,
            deleteObj,
            updateObj,
            borrarPass,
            objPassword,
            objPasswords,
        }}>
            {children}
        </passContext.Provider>
    )
}