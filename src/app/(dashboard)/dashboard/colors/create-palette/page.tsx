import CreateCustomePaletteForm from '@/components/forms/create-custome-palette-form'
import React from 'react'

type Props = {}

const CreatePalette = (props: Props) => {
  return (
    <div className='h-screen flex flex-col items-center pt-14'>
        <h2 className='border-none text-center mb-10'>Personalize and Assign Your <br/>Custom Palette</h2>
        <div className=''>
            <CreateCustomePaletteForm />
        </div>
    </div>
  )
}

export default CreatePalette