'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

type Link = {
    label: string
    href: string
}

type HeaderProps = {
    links: Link[]
}

const Header = () => {

    const pathname = usePathname()

    const links: Link[] = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Design',
            href: '/design'
        },
        {
            label: 'Guide',
            href: '/guide'
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
    <section className='fixed top-0 left-0 right-0 max-w-7xl mx-auto p-3 flex items-center justify-between'>
        <div>
            <h3>Logo</h3>
        </div>

        <nav>
            <ul className='flex itmes-center gap-7 font-semibold text-xl'>
                {links.map((link, index) => (
                    <li key={index} className='hover:scale-110 transiton duration-500'>
                        <Link href={link.href}>
                            <span className={pathname === link.href ? 'text-primary transition duration-500' : 'text-gray-400 transition duration-500'}>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

        <div>
            <Link href='/signin'>
                <Button variant='outline' className='text-lg shadow-lg hover:bg-primary hover:text-primary-foreground'>Login</Button>
            </Link>
        </div>
    </section>
  )
}

export default Header