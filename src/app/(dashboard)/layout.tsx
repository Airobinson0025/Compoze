'use client'
import React, { useState, useRef, useEffect, use } from 'react'
import { useSession } from 'next-auth/react'
import DashboardSidebar from '@/components/global/dashboard-sidebar'
import { useRouter } from 'next/navigation'
import { Player } from '@lordicon/react'
import { motion } from 'framer-motion'

const ICON = require('../../assests/loading-spinner.json')


interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const router = useRouter()
    const playerRef = useRef<Player>(null)

    const [ isLoading, setIsLoading ] = useState(true)

    const { data: session, status } = useSession()
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timeout)
    }, [status])

    
    useEffect(() => {
        if (!session && status === 'unauthenticated') {
          router.push('/signin');
        }
      }, [session, status, router]);
    

    useEffect(() => {
        playerRef.current?.playFromBeginning()
    }, [])


    if (isLoading || status === 'loading') {
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}  
            className='h-screen flex flex-col items-center justify-center gap-4'>
                <Player
                ref={playerRef}
                icon={ICON}
                size={30}
                colorize='true'
                onComplete={() => playerRef.current?.playFromBeginning()}
                />
                <h3>Loading...</h3>
            </motion.div>
        )
    }

    if (!session) {
        router.push('/signin')
    }


    
  return (
    <div className='flex pt-20'>
        <div className='fixed'>
            <DashboardSidebar />
        </div>
        <div className={`overflow-y-scroll pt-6 transition-padding duration-300 md:pl-52  pr-8`}>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout