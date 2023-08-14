import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const {createTask} = useContext(TaskContext)
  

  const handleSubmit = (e) => {
    e.preventDefault(); //event what helps to save the values
    console.log(title,description)
    createTask({
      title,
      description
    });
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>create your task</h1>
      <input placeholder='write your task' 
        className='bg-slate-300 p-3 w-full mb-2'
        onChange={(e) => {
        setTitle(e.target.value)
      }}></input>
      
      <textarea placeholder='write to the description for tour task' 
      className='bg-slate-300 p-3 w-full mb-2'
      onChange={ e => {setDescription(e.target.value)}}></textarea>
      <button className='bg-indigo-500 px-3 py-1 text-white'>
        save
      </button>
    </form>
    </div>
  )
}

export default TaskForm
