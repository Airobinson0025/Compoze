'use client'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { Player } from '@lordicon/react'

const ICON = require('../../assests/flat-arrow.json')

const Hero = () => {
    const playerRef = useRef<Player>(null)

    useEffect(() => {
        playerRef.current?.pause()
    }, [])

    const handlePlayAnimation = () => {
        playerRef.current?.playFromBeginning()
    }

    

    const word = 'Compozed'

    const firstFourLetters = word.slice(0, 4)

    const italicizedFirstFourLetters = (word: string) => {
        return (
            <span className='italic font-extrabold text-blue-500'>{firstFourLetters}</span>)
    }

  return (
    <section className='flex flex-col justify-center items-center text-center gap-5 mt-20 h-[550px]'>
        <div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light'>{italicizedFirstFourLetters(word)}ozed.</h1>
            <h3 className='mt-5 border-none font-normal text-muted-foreground'>Intellignently Organize and Elevate Your Website Design Systems</h3>
        </div>

        <div onMouseEnter={handlePlayAnimation} className='flex items-center gap-2 h-11 border rounded-md px-8 text-md md:text-lg text-background shadow-lg bg-primary hover:bg-background hover:text-primary hover:border-foreground transition duration-500'>
            <Link href='/register' className='flex items-center gap-2'>
                <button>Get Started</button>
            <div>
                <Player
                    ref={playerRef}
                    icon={ICON}
                    size={35}
                    colorize='true'
                />
            </div>
            </Link>
        </div>
    </section>
  )
}

export default Hero