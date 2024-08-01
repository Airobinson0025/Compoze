import SigninForm from '@/components/forms/signinForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-md'>
            <SigninForm />
        </div>
    </section>
  )
}

export default SignIn