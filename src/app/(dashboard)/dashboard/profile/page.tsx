'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Profile = () => {
  return (
    <section>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }} 
          className='flex flex-col gap-2'>
            <h1>Profile</h1>
            <h3 className='text-muted-foreground'></h3>
          </motion.div>
      </section>
  )
}

export default Profile