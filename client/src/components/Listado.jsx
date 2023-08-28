import React, { useEffect } from 'react'
import { usePassContext } from '../context/PasswordContext'

const Listado = () => {
    const {viewAllPass}= usePassContext();   
    useEffect(() => {
      viewAllPass()
    }, [])
     
    return (
        <div className=' block'>
            
        </div>
    )
}

export default Listado