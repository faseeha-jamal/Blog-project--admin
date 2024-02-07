import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SigninPage from '../pages/SigninPage'
import AdminPage from '../pages/AdminPage'
import UserPage from '../pages/UserPage'
import DasboardPage from '../pages/DasboardPage'

const Router = () => {
  return (
    <Routes>
        <Route element={<AdminPage/>}>
           <Route index element={<Navigate replace to="dashboard" />} />
           <Route path='/user' element={<UserPage/>} />
           <Route path='/dashboard' element={<DasboardPage/>} />
        </Route>
        <Route path='/signin' element={<SigninPage/>}/>
      </Routes>
  )
}

export default Router