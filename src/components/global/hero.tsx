'use client'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { Player } from '@lordicon/react'
import { useSession } from 'next-auth/react'

const ICON = require('../../assests/flat-arrow.json')

const Hero = () => {
    const session = useSession()

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
            <span className='text-blue-600'>{firstFourLetters}</span>)
    }

  return (
    <section className='flex flex-col justify-center items-center text-center gap-5 mt-20 h-[550px]'>
        <div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>{italicizedFirstFourLetters(word)}ozed.</h1>
            <h3 className='mt-5 border-none font-normal text-muted-foreground'>Intellignently Organize and Elevate Your Website Design Systems</h3>
        </div>

        <div onMouseEnter={handlePlayAnimation} className='flex items-center gap-2 h-11 bg-blue-600 border rounded-md px-8 text-md md:text-lg text-background dark:text-foreground shadow-xl hover:scale-105 hover:bg-background hover:text-blue-600 hover:border-blue-600 transition duration-500'>
            <Link href={session ? '/dashboard' : '/register'} className='flex items-center gap-2'>
                <button>Start Creating</button>
            <div>
                <Player
                    ref={playerRef}
                    icon={ICON}
                    size={30}
                    colorize='true'
                />
            </div>
            </Link>
        </div>
    </section>
  )
}

export default Hero