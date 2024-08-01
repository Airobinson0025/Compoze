'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import DashboardSidebar from '@/components/global/dashboard-sidebar'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const { data: session, status } = useSession()

    
  return (
    <div className='flex mt-24'>
        <div>
            <DashboardSidebar />
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout