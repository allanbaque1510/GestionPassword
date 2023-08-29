import { createContext, useContext, useState } from "react";
import { getAllObjects,getObject,modifyObject,createObject, deleteObject } from "../api/passwords";

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
    const viewAllPass = async()=>{
        const res = await getAllObjects();
        setObjPasswords(res.data)
        console.log(res.data)
    } 
    const createNewObjPass = async(data)=>{
       const res = await createObject(data)
       setObjPassword(res.data)
    }
    return(
        <passContext.Provider value={{
            createNewObjPass,
            viewAllPass,
            objPassword,
            objPasswords,
        }}>
            {children}
        </passContext.Provider>
    )
}