'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewTask({params}) {

  const  [title, setTitle]  = useState('');
  const  [description, setDescription]  = useState('');
  const router = useRouter()

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
        setTitle(data.title)
        setDescription(data.description)
      })
    }
  },[])

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({title, description}),
        headers: {'Content-Type': 'application/json '}
      })
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json();
      console.log(data);
    }
    router.push('/')
    router.refresh()
  }

  return (
    <div className=" h-screen flex justify-center items-center">
      <form 
        className=" bg-third-color p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}>
        <label className="text-button-color font-bold text-lg">Title</label>
        <input id="title" type="text" 
        placeholder="Title task" 
        className=" border-text-color w-full py-2 my-3 rounded-md text-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title} />
        <label className=" text-button-color font-bold text-lg">Description</label>
        <textarea id="description" rows="4" 
          placeholder="Add a description" 
          className=" border-text-color w-full my-3 rounded-md text-black"
          onChange={(e) => setDescription(e.target.value)}
          value={description}></textarea>
          <button className=" text-white bg-button-color py-3 w-full rounded-md font-bold">Add</button>
        {
          params.id && (
            <button className=" text-white bg-red-500 my-3 px-3 py-3 rounded-md font-bold"
            onClick={async () => {
              const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE',
              })
              const data = res.json()
              console.log(data)
              router.push('/')
              router.refresh()
            }}>Delete</button>
          )
        }
      </form>
    </div>
  )
}

export default NewTask