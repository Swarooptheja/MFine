import React from 'react'
import "./Bookslot.css";
import { BiTestTube } from "react-icons/bi"
import { FcHome } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Input } from '@chakra-ui/react'
export const Bookslot = () => {
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
        <div id='headingbook'>
          <div>
            <h2>Home Collection</h2>
          </div>
          <div>
            <h2>Center visit</h2>
          </div>
        </div>
        <div id='calender'>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            htmlSize={5} width='auto'
          />
        </div>
      </div>
    </>
  )
}
