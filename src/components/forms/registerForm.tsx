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


const registerSchema = z.object({
    firstName: z.string().min(2, { message: 'Must be one character long'}).max(50),
    lastName: z.string().min(2, { message: 'Must be one character long'}).max(50),
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
})

const handleSumit = async (values: z.infer<typeof registerSchema>) => {
    console.log(values)
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
        <h2 className='mb-2 border-none'>Enter your info below to get started today.</h2>
        <form className='flex flex-col gap-4 w-full text-lg p-4'>
            <div className='flex items-center gap-3 w-full'>
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-md'>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder='First' className='text-lg' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                <FormField
                    control={form.control}
                    name='lastName'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-md'>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Last' className='text-lg' {...field} />
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
                            <Input placeholder='your@email.com' className='text-md' {...field} />
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
                
        </form>
        <Button size='lg' type='submit' className='mt-6 text-lg w-full' onClick={form.handleSubmit(handleSumit)}>Register</Button>
    </Form>
  )
}

export default RegisterForm