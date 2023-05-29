import React from 'react'
import Dalshboard from '../components/Dashbord'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Dalshboard className='flex-none'/>
        <Outlet className='flex-grow'/>
    </div>
  )
}

export default Dashboard