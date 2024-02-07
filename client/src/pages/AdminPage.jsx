import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='w-full flex'>
          <div className=''>
            <Sidebar/>
          </div>
          <div className='w-full'>
           <Outlet/>
          </div>
        </div>

    </div>
  )
}

export default AdminPage