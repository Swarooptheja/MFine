import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bookslot } from './Healthcheck/Bookslot'
import { Healthcheck } from './Healthcheck/Healthcheck'
import { Healthsinglepage } from './Healthcheck/Healthsinglepage'
import { Reqauth } from './Healthcheck/Reqauth'
import { Success } from './Healthcheck/Success'
import Home from './Home'
import Login from './Login/Login'
import Signup from './Signup/Signup'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/healthcheck' element={<Healthcheck/>}/>
        <Route  path='/healthchecksinglepage' element={<Healthsinglepage/>} />
        <Route path='/bookslot' element={<Reqauth><Bookslot/></Reqauth>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
    </Routes>
  )
}
