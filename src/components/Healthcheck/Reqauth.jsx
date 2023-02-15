import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const Reqauth = ({children}) => {
    let Navi=useNavigate();
    let location=useLocation()
    let isAuth=useSelector((state)=>{
        return state.Authreducer.isAuth
    })
    if(!isAuth){
        return <Navigate to="/login" state={{from:location.pathname}} replace  />
    }
 return children
}
