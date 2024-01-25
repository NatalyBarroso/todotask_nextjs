'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function ButtonNew() {
  const router = useRouter()
  return (
    <button className='bg-text-color text-black w-full rounded-md p-2 font-bold mb-3'
         onClick={() => {
          router.push('/pages/new')
         }}>Create new task</button>
  )
}

export default ButtonNew