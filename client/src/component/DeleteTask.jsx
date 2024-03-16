import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const DeleteTask = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const delteTodo = async()=>{
            try {
                let response = await axios.delete(`https://basant-todo-app.vercel.app/${id}`)
                console.log(response.data);
                navigate("/")
            } catch (error) {
                console.log(error);
                navigate("/")
            }
        }
        delteTodo()

    },[id])
  return (
    <div>
    </div>
  )
}

export default DeleteTask
