'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  
    const { data: session, status } = useSession()

    const usersName = session?.user?.name
  
    return (
      <section>
          <div className='flex flex-col gap-2'>
            <h1>Welcome, {usersName}</h1>
            <h3 className='text-muted-foreground'>This Is Your Creative Command Center</h3>
          </div>
      </section>
    )
}

export default Dashboard