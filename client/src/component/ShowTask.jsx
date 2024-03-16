import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
const ShowTask = () => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [output, setOutput] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async()=>{
        try {
           const response=  await axios.post("https://basant-todo-app.vercel.app/create",{task,description})
            console.log(response.data);
            setDescription('')
            setTask("")
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const showTask = async () => {
            try {
                let response = await axios.get("https://full-stack-todo-app-2n99.vercel.app/task")
                setOutput(response.data.task)

            } catch (error) {
                console.log(error)
            }
        }
        showTask()
    }, [])

    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center p-3 bg-zinc-600 overflow-auto '>
            <div className=' w-[35vw] bg-zinc-100 rounded-md'>
                <h1 className='text-center font-bold pt-3 text-3xl'>Todo list</h1>
                <div className='p-4 '>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='p-2 rounded-md outline-none' placeholder='Enter Your Task' />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='p-2 rounded-md outline-none' placeholder='Enter Your description' />
                        <button className='bg-orange-300 rounded-md text-white font-bold p-2'>Add Task</button>
                    </form>
                </div>
                <hr />
                <div className='showtask'>
                    {output.map((value) => {
                        return <div key={value._id} className=' h-[100%] w-[100%] overflow-x-auto'>
                            <ul>
                                <li className='flex justify-between items-center px-4 pb-2  '>
                                    <div className='w-[60%]'>
                                        <h5 className='text-[12px pb-[]-3px ] font-bold'>{value.task}</h5>
                                        <p className='text-[10px]'>{value.description}</p>
                                    </div>
                                    <Link to={`/update/${value._id}`}><button className='bg-orange-300 rounded-md text-white text-[12px] p-1 font-bold '>Update</button></Link> <br />
                                    <Link to={`/delete/${value._id}`}><button className='bg-orange-300 rounded-md text-white text-[12px] p-1 font-bold '>Delete</button></Link> <br />
                                </li>
                            </ul>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShowTask
