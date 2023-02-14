import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Healthcheck } from './Healthcheck/Healthcheck'
import Home from './Home'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/healthcheck' element={<Healthcheck/>}/>
    </Routes>
  )
}
