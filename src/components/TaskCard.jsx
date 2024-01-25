'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function TaskCard({task}) {
  const router = useRouter()
  return (
    <div className=' bg-button-color hover:bg-text-color cursor-pointer rounded-md mb-3' 
      onClick={() => {
        router.push('/pages/edit/' + task.id)
      }}>
      <h3 className=' text-white font-bold pl-4 pt-3'>{task.title}</h3>
      <p className=' text-white pl-4'>{task.description}</p>
      <p className=' text-white pl-4 pb-3'>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard