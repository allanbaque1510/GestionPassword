import {z} from 'zod'
export const createSchema = z.object({

    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
        
})
export const updateSchema = z.object({

    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
}) 