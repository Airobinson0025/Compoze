'use client'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { Player } from '@lordicon/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'



const ICON = require('../../assests/navigation-icon.json')

type Link = {
    label: string
    href: string
}

type HeaderProps = {
    links: Link[]
}

const Header = () => {

    const playerRef = useRef<Player>(null)

    const pathname = usePathname()

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
    <section className='top-0 left-0 right-0 max-w-7xl mx-auto pt-3 px-4 xl:px-0 flex items-center justify-between z-[1000] fixed'>
        <div>
            <h3>Logo</h3>
        </div>

        {/* <nav className='hidden md:inline'>
            <ul className='flex items-center gap-7 font-medium text-lg'>
                {links.map((link, index) => (
                    <li key={index} className='hover:scale-[1.07] transiton duration-300 ease-in-out'>
                        <Link href={link.href}>
                            <span className={pathname === link.href ? 'text-blue-500 transition duration-500' : 'text-gray-400 transition duration-500'}>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav> */}

        <div>
            <div onMouseEnter={handlePlayAnimation}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant='outline' size='icon' className='border-2 border-foreground shadow-xl hover:shadow-blue-500/45 hover:border-blue-600 hover:text-blue-600 transition duration-500'>
                                <Player
                                    ref={playerRef}
                                    icon={ICON}
                                    size={30}
                                    colorize='true'
                                />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p className='text-foreground'>Navigate</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </section>
  )
}

export default Header