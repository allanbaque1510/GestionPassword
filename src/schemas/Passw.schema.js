import {z} from 'zod'
export const createSchema = z.object({
    user:z.string({
        required_error:'Username es requerido'
        }),
    email: z.string({
        required_error:'Email es requerido'
        }).email({
            message: 'Email invalido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
    site: z.string({
        required_error: 'La contraseña es requerida'
        }).url({message:'URL Invalida'})
        
})
export const updateSchema = z.object({
    user:z.string({
        required_error:'Username es requerido'
        }),
    email: z.string({
        required_error:'Email es requerido'
        }).email({
            message: 'Email invalido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
    site: z.string({
        required_error: 'La contraseña es requerida'
        }).url({message:'URL Invalida'})
}) 