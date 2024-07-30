import RegisterForm from '@/components/forms/registerForm'
import React from 'react'

const Register = () => {


  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-lg border p-8 rounded-lg shadow-xl'>
            <RegisterForm />
        </div>
    </section>
  )
}

export default Register