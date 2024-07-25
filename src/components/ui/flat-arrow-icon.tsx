'use client'
import React, { useRef, useEffect } from 'react'
import { Player } from '@lordicon/react'

const ICON = require('../../assests/flat-arrow.json')



const FlatArrowIcon = () => {
    const playerRef = useRef<Player>(null)

    useEffect(() => {
        playerRef.current?.pause()
    }, [])


  return (
    <div>
        <Player
            ref={playerRef}
            icon={ICON}
            size={30}
            colorize='true'

        />
    </div>
  )
}

export default FlatArrowIcon