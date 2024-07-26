import React from 'react'
import { useSelector } from 'react-redux'
import './CompainedTopCard.css'
import TotalTask from '../Task/TotalTask'
import ProgressTask from '../Progress/ProgressTask'
import CompletedTask from '../Completed/CompletedTask'
import TodoTask from '../Todo/TodoTask'

const CompainedTopCard = () => {


  const tasks = useSelector((state) => state.tasks.tasks)
  const completedTasks = tasks.filter((task) => task.stage === 'completed')
  const progressTasks = tasks.filter((task) => task.stage === 'pending')
  const todoTasks = tasks.filter((task) => task.stage === 'todo')
  
  const totalLength = tasks.length

  const completedLength = completedTasks.length
  const progressLength = progressTasks.length
  const todoLength = todoTasks.length

  console.log("com : " , completedTasks)

  return (
    <>
    <div className='row mt-3'>
        <div className="col-3 d-flex align-items-center justify-content-center card_mar_pad"><TotalTask totalLength={totalLength}/></div>
        <div className="col-3 d-flex align-items-center justify-content-center card_mar_pad"><CompletedTask completedLength={completedLength} /></div>
        <div className="col-3 d-flex align-items-center justify-content-center card_mar_pad"><ProgressTask progressLength={progressLength}/></div>
        <div className="col-3 d-flex align-items-center justify-content-center card_mar_pad"><TodoTask todoLength={todoLength}/></div>
    </div>
    </>
  )
}

export default CompainedTopCard 