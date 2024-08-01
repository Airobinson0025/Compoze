import RegisterForm from '@/components/forms/registerForm'
import React from 'react'

const Register = () => {


  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-md'>
            <RegisterForm />
        </div>
    </section>
  )
}

export default Register