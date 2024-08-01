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
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
})

const SigninForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const handleSubmit = async (values: z.infer<typeof signInSchema>) => {
        try {
            const response = await signIn('credentials',{
                email: values.email,
                password: values.password,
                redirect: false
            })
    
            if (response?.ok) {
                console.log('User signed in successfully')
                router.push('/dashboard')
            }
        } catch (error) {
            console.error(error)
            throw new Error('An error occurred while signing in from signInForm')
        }
    }


  return (
    <Form {...form}>
        <h2 className='mb-14 border-none'>Sign In To Your Compoze Account.</h2>
        <form className='flex flex-col gap-4 w-full text-md'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-md'>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='' className='text-md' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                )}></FormField>

                <FormField
                    control={form.control}
                    name='password'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='text-md'>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder='' className='text-md' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                )}></FormField>
        </form>
        <Button type='submit' onClick={form.handleSubmit(handleSubmit)} className='w-full mt-6'>Sign In</Button>
        <div className='text-center mt-3'>
            <span>Dont have an account yet? Make one here <Link href='/register' className='text-blue-500 hover:underline'>Create account</Link>
            </span>
        </div>
    </Form>
  )
}

export default SigninForm