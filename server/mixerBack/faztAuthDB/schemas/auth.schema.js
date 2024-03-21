import {z} from 'zod'

export const registerSchema = z.object({
    email: 
        z.string({required_error: 'Email is required'})
        .email({message: 'Invalid email'}
    ),
    password: 
        z.string({required_error: 'Password id required'})
        .min(6, {message: 'Password must be at least 6 characters long'})
})

export const loginSchema = z.object({
    email: 
        z.string({required_error: 'Email is required'})
        .email({message: 'Invalid email'}
    ),
    password: 
        z.string({required_error: 'Password id required'})
        .min(6, {message: 'Password must be at least 6 characters long'})
})