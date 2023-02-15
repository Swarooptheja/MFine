import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bookslot } from './Healthcheck/Bookslot'
import { Healthcheck } from './Healthcheck/Healthcheck'
import { Healthsinglepage } from './Healthcheck/Healthsinglepage'
import Home from './Home'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/healthcheck' element={<Healthcheck/>}/>
        <Route  path='/healthchecksinglepage' element={<Healthsinglepage/>} />
        <Route path='/bookslot' element={<Bookslot/>}/>
    </Routes>
  )
}
