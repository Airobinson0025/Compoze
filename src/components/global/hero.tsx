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

  return (
    <section className='flex flex-col justify-center items-center text-center gap-4 mt-24 h-[600px] border'>
        <div>
            <h1 className='lg:text-7xl'>Compoze</h1>
            <h2 className='mt-4 border-none font-normal text-muted-foreground'>Intellignently Organize and Elevate Your Website Design Systems</h2>
        </div>

        <div onMouseEnter={handlePlayAnimation} className='flex items-center gap-2 h-11 border rounded-md px-8 text-lg text-background shadow-lg bg-primary hover:bg-background hover:text-primary hover:border-foreground transition duration-500'>
            <Link href='/register'>
                <button>Get Started</button>
            </Link>
            <div>
                <Player
                    ref={playerRef}
                    icon={ICON}
                    size={30}
                    colorize='true'
                />
            </div>
        </div>
    </section>
  )
}

export default Hero