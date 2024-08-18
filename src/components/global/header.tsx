'use client'
import Link from 'next/link'
import React, { useRef, useEffect, useState, use } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { Player } from '@lordicon/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { FlipWords } from '../ui/flip-words'
import { motion } from 'framer-motion'
import ThemeToggle from '../toggles/theme-toggle'




const ICON = require('../../assests/navigation-icon.json')

type Link = {
    label: string
    href: string
}

type HeaderProps = {
    links: Link[]
}

const Header = () => {

    const [ hideTagline, setHideTagline ] = useState(false)

    const words = [ 'clarity.', 'confidence.', 'passion.', 'percision.', 'vision.', 'Compozed.']

    const pathname = usePathname()

    const playerRef = useRef<Player>(null)

    useEffect(() => {
        if (pathname === '/') {
            setHideTagline(true)
        } else {
            setHideTagline(false)
        }
    }, [pathname])

    useEffect(() => {
        playerRef.current?.playFromBeginning()
    }, [])

    const handlePlayAnimation = () => {
        playerRef.current?.playFromBeginning()
    }


    const links: Link[] = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Dashboard',
            href: '/dashboard'
        },
        {
            label: 'Docs',
            href: '/documentation'
        },
        {
            label: 'Pricing',
            href: '/pricing'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ]


  return (
    <section className='top-0 left-0 right-0 max-w-7xl mx-auto py-4 px-4 xl:px-0 flex items-center justify-between z-[1000] fixed'>
        <div>
            <Link href='/'>
                <h3>Logo</h3>
            </Link>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: .4 }}
            className={hideTagline ? 'hidden md:flex items-center text-center pl-32' : 'hidden'}>
            <h3 className='text-muted-foreground font-normal'>Design with purpose, build with</h3>
            <div className='w-[150px] text-left'>
                <h3 className=''><FlipWords words={words} /></h3>
            </div>
        </motion.div>


        <div className='flex items-center gap-2'>
            <div onMouseEnter={handlePlayAnimation}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant='outline' size='icon' className='border-[1.5px] border-foreground shadow-xl transition duration-500'>
                                <Player
                                    ref={playerRef}
                                    icon={ICON}
                                    size={30}
                                    colorize='true'
                                />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className='mt-1'>
                        <p className='text-foreground'>Navigate</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <ThemeToggle />
        </div>
    </section>
  )
}

export default Header