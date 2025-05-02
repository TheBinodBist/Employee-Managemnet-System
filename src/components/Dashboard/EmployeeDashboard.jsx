import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'
import AcceptTask from '../TaskList/AcceptTask'


const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 mt-10  bg-[#1c1c1c]'>
      
       <Header data={data}/>
       <TaskNumber data={data}/>
       <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard