import React from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios"
const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            let response = await axios.put(`http://localhost:3001/update/${id}`,{task,description})
            console.log(response.data);
            navigate("/")
        } catch (error) {
            console.log(error);
            navigate("/")
        }

    }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center p-3 bg-zinc-600'>
    <div className=' w-[35vw] bg-zinc-100 rounded-md'>
    <h1 className='text-center font-bold pt-3 text-3xl'>Todo list</h1>
    <div className='p-4 '>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className='p-2 rounded-md outline-none' placeholder='Enter Your Task To Update : ' />
      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className='p-2 rounded-md outline-none' placeholder='Enter Your description To Update : ' />
      <button className='bg-orange-300 rounded-md text-white font-bold p-2'>Update Task</button>
      </form>
    </div>
    <hr />
   
  </div>
  </div>
  )
}

export default Update