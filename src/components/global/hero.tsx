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

    const colors = {
        blue: 'text-[#0A21C0]',
        darkBlue: 'text-[#050A44]',
        darkGray: 'text-[#2C2E3A]',
        lightGray: 'text-[#B3B4BD]',
    }

    const word = 'Compozed'

    const colorizeFirstFourLetters = (word: string) => {
        const firstFourLetters = word.slice(0, 4)
        const remainingLetters = word.slice(4)
        return (
            <span className='italic'>
                <span className={colors.blue}>{firstFourLetters[0]}</span>
                <span className={colors.darkBlue}>{firstFourLetters[1]}</span>
                <span className={colors.darkGray}>{firstFourLetters[2]}</span>
                <span className={colors.lightGray}>{firstFourLetters[3]}</span>
            </span>
        )
    }

  return (
    <section className='flex flex-col justify-center items-center text-center gap-5 mt-20 h-[550px]'>
        <div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>{colorizeFirstFourLetters(word)}ozed.</h1>
            <h3 className='mt-5 border-none font-normal text-muted-foreground'>Intellignently Organize and Elevate Your Website Design Systems</h3>
        </div>

        <div onMouseEnter={handlePlayAnimation} className='flex items-center gap-2 h-11 border rounded-md px-8 text-md md:text-lg text-background shadow-lg bg-primary hover:bg-background hover:text-primary hover:border-foreground transition duration-500'>
            <Link href='/register'>
                <button>Get Started</button>
            </Link>
            <div>
                <Player
                    ref={playerRef}
                    icon={ICON}
                    size={35}
                    colorize='true'
                />
            </div>
        </div>
    </section>
  )
}

export default Hero