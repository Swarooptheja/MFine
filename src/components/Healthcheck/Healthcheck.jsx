import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getdata } from '../../Appreducer/action'
import "./Healthcheck.css"
export const Healthcheck = () => {
    let dispatch=useDispatch()
   
    let healthdata=useSelector((state)=>{
        return state.Appreducer.healthcheckdata
    })
    useEffect(()=>{

    },[healthdata])
  return (
    <>
    
    <div id='healthdatacontainer'>
        {
            healthdata.length>0 && healthdata.map((el)=>{
                return (
                    <div key={el.name}>
                        <img src={el.image} alt="Image" />
                        <h2>{el.name}</h2>
                        <div id="bottom">
                            <div>
                                <h4>₹ {el.Mrp}</h4>
                            </div>
                            <div>
                                <button id='pricebtn'>₹ {el.price}</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    <div id='healthdatabottom'>

    </div>
    </>
  )
}
