'use client'
import { motion } from 'framer-motion'
import React from 'react'


const Components = () => {
  return (
      <section>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }} 
          className='flex flex-col gap-2'>
            <h1>Components +</h1>
            <h3 className='text-muted-foreground'></h3>
          </motion.div>
      </section>
  )
}

export default Components