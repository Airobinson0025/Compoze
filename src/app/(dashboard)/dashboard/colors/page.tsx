'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineColorSwatch } from "react-icons/hi"
import { RiAiGenerate } from "react-icons/ri";
import { IoMdGlobe } from "react-icons/io"
import Link from 'next/link';


const colorActions = [
  {
    name: 'Create a Palette',
    icon:  <HiOutlineColorSwatch size={35}/>,
    href: '/dashboard/colors/create-palette'
  },
  {
    name: 'Generate Palette with AI',
    icon: <RiAiGenerate size={35}/>,
    href: '/ai-palette'
  },
  {
    name: 'Trending Palettes',
    icon: <IoMdGlobe size={35}/>,
    href: '/treanding-palettes'
  }
]

const Colors = () => {
  return (
      
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }} 
          className='flex flex-col gap-2'>
            <h1>Colors & Palettes</h1>
            
            <div className='mt-10 flex flex-col'>
              <h3 className='mb-4 text-muted-foreground'>Start strong by picking the right palette for a new or existing</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {colorActions.map((action, index) => (
                  <Link href={action.href} key={index} className='flex flex-col items-center gap-2 px-4 py-8 bg-muted rounded-md shadow-xl text-blue-600 text-center border hover:bg-blue-600 hover:text-background hover:dark:text-foreground transition-colors duration-300'>
                    <i>{action.icon}</i>
                    <h4 className=''>{action.name}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
  )
}

export default Colors