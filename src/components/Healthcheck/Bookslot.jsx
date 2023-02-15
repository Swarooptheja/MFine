import React, { useState } from 'react'
import "./Bookslot.css";
import { BiTestTube } from "react-icons/bi"
import { FcHome } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Input } from '@chakra-ui/react';
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export const Bookslot = () => {
  const [main,setmain]=useState("")
  let [value,setvalue]=useState("");
  let [input,setinput]=useState("")
  const handlechange = () => {
   setvalue(1)
  }
  const handlebutton=()=>{
    setmain(1)
  }
  let navigate=useNavigate()
  const handleconfirm=()=>{
    navigate("/success")
  }
  const handleback=()=>{
    navigate("/healthchecksinglepage")
  }
  const handleinput=(e)=>{
    setinput(e.target.value)
  }
  
  return (
    <>
      <div id='bookslotcontainer'>
        <>
          <h2 style={{ width: "90%", margin: "auto" }}>Order Lab Tests</h2>
        </>
        <div id='bookslotmain' className='icon-container'>
          <div>
            <BiTestTube size={50} className="icon" cursor={"pointer"} color={"orangered"} />
          </div>
          <div>
            <FcHome size={50} className="icon" cursor={"pointer"} color={"green"} />
          </div>
          <div>
            <BsPersonFill size={50} className="icon" cursor={"pointer"} color={"blue"} />
          </div>
          <div>
            <FiMapPin size={50} className="icon" cursor={"pointer"} color={"black"} />
          </div>
        </div>
        <div id='labs'>
          <button id='labbtn'>
            Lab offering sample collection at home
          </button>
        </div>

        <div id='one'>
        <div id='calender'>
          <h4 style={{ display: "inline", marginRight: "1rem" }}>Please select your date</h4>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            htmlSize={5} width='auto'
            onChange={(e) => handleinput(e)}
          />
        </div>

        <div id='hospital'>
          <input style={{display:"inline"}} type="radio" value={value} onChange={handlechange}  name="value" />
          <label style={{display:"inline"}} htmlFor=""><h2 style={{display:"inline"}}>MFine Diagnostics</h2></label>
        </div>

        <div id='hospitalprice'>
          <div>
            <h3>
            ₹ 1499 /-
            </h3>
          </div>
          <div>
            <p style={{color:"red", textDecoration:"line-through"}}>
            ₹ 2400 /-
            </p>
          </div>
          <div>
            <button style={{color:"white",border:"none",backgroundColor:"red"}}>60% off</button>
          </div>
        </div>
        <hr />
        <div>
          <p style={{fontSize:"20px",textAlign:"left"}}>Slots Available</p>
        </div>
        <div id='buttonid'>
          <div>
            <button onClick={handlebutton}>
              06:30 - 07:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07:00 - 07:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07-30 - 08:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              08:30 - 09:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:00 - 09:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:30 - 10:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              10:30 - 11:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:00 - 11:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:30 - 12:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:00 - 12:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:30 - 13:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:00 - 13:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:30 - 14:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:00 - 14:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:30 - 15:00
            </button>
          </div>
        </div>
        </div>

        <div id='one'>
        <div id='calender'>
          <h4 style={{ display: "inline", marginRight: "1rem" }}>Please select your date</h4>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            htmlSize={5} width='auto'
            onChange={(e) => handlechange(e)}
          />
        </div>

        <div id='hospital'>
          <input style={{display:"inline"}} type="radio" value={value} onChange={handlechange}  name="value"   />
          <label style={{display:"inline"}} htmlFor=""><h2 style={{display:"inline"}}>5th vital</h2></label>
        </div>

        <div id='hospitalprice'>
          <div>
            <h3>
            ₹ 1520 /-
            </h3>
          </div>
          <div>
            <p style={{color:"red", textDecoration:"line-through"}}>
            ₹ 3000 /-
            </p>
          </div>
          <div>
            <button style={{color:"white",border:"none",backgroundColor:"red"}}>70% off</button>
          </div>
        </div>
        <hr />
        <div>
          <p style={{fontSize:"20px",textAlign:"left"}}>Slots Available</p>
        </div>
        <div id='buttonid'>
          <div>
            <button onClick={handlebutton}>
              06:30 - 07:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07:00 - 07:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07-30 - 08:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              08:30 - 09:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:00 - 09:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:30 - 10:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              10:30 - 11:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:00 - 11:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:30 - 12:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:00 - 12:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:30 - 13:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:00 - 13:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:30 - 14:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:00 - 14:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:30 - 15:00
            </button>
          </div>
        </div>
        </div>

        <div id='one'>
        <div id='calender'>
          <h4 style={{ display: "inline", marginRight: "1rem" }}>Please select your date</h4>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            htmlSize={5} width='auto'
            onChange={(e) => handlechange(e)}
          />
        </div>

        <div id='hospital'>
          <input style={{display:"inline"}} type="radio" value={value} onChange={handlechange}  name="value"/>
          <label style={{display:"inline"}} htmlFor=""><h2 style={{display:"inline"}}>Apolo</h2></label>
        </div>

        <div id='hospitalprice'>
          <div>
            <h3>
            ₹ 1900 /-
            </h3>
          </div>
          <div>
            <p style={{color:"red", textDecoration:"line-through"}}>
            ₹ 3800 /-
            </p>
          </div>
          <div>
            <button style={{color:"white",border:"none",backgroundColor:"red"}}>50% off</button>
          </div>
        </div>
        <hr />
        <div>
          <p style={{fontSize:"20px",textAlign:"left"}}>Slots Available</p>
        </div>
        <div id='buttonid'>
          <div>
            <button onClick={handlebutton}>
              06:30 - 07:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07:00 - 07:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              07-30 - 08:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              08:30 - 09:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:00 - 09:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              09:30 - 10:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              10:30 - 11:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:00 - 11:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              11:30 - 12:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:00 - 12:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              12:30 - 13:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:00 - 13:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              13:30 - 14:00
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:00 - 14:30
            </button>
          </div>
          <div>
            <button onClick={handlebutton}>
              14:30 - 15:00
            </button>
          </div>
        </div>
        </div>
        <div id="bottombuttonid">
          <div>
            <button className='blackback' onClick={handleback}>Back</button>
          </div>
          <div>
            <button className='blackback' disabled={value=='' || main=="" || input==""} onClick={handleconfirm} >Confirm</button>
          </div>
        </div>




       


      </div>
    </>
  )
}
