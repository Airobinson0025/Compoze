'use client'
import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
    Form,
    FormControl,
    FormLabel,
    FormMessage,
    FormField,
    FormItem
 } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


// shema for form validation
const registerSchema = z.object({
    firstName: z.string().min(1, { message: 'Must be one character long'}).max(50),
    lastName: z.string().min(1, { message: 'Must be one character long'}).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
})

// api request to create user
const handleSumit = async (values: z.infer<typeof registerSchema>) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            })
        })

        if (response?.ok) {
            const data = await response.json()
            console.log('User created successfully', data)
        }

    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while creating user from frontend')
    }
}

const RegisterForm = () => {

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    })

  return (
    <Form {...form}>
        <h2 className='mb-14 border-none text-center'>Enter Your Info Below To <br className='md:hidden'/> Start Creating.</h2>
        <form className='flex flex-col gap-5 w-full text-md'>
            <div className='flex items-center gap-3'>
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='text-md'>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder='First' className='text-md w-full' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                <FormField
                    control={form.control}
                    name='lastName'
                    render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='text-md'>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Last' className='text-md' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>
            </div>

            <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Email</FormLabel>
                        <FormControl>
                            <Input placeholder='Example@gmail.com' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>
            
            <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Create Password</FormLabel>
                        <FormControl>
                            <Input placeholder='Password' className='text-md' type='password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

                <Button size='lg' type='submit' className='text-md w-full' onClick={form.handleSubmit(handleSumit)}>Register</Button>
                
        </form>
    </Form>
  )
}

export default RegisterForm