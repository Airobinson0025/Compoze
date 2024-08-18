'use client'
import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <Button size='icon' onClick={handleToggle} className=''>
        {resolvedTheme === 'dark' ? (
          <IoSunnyOutline size={25} />
        ) : (
          <IoMoonOutline size={25} />
        )}
      </Button>
    </div>
  )
}

export default ThemeToggle