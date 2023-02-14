import React from 'react'
import "./Healthsinglepage.css"
import {TbTestPipe} from "react-icons/tb"
import {ImSmile2} from "react-icons/im"
export const Healthsinglepage = () => {
    let data=JSON.parse(localStorage.getItem("singledata"))||[]
  return (
    <>
    <h1 style={{width:"90%",textAlign:"left", margin:"auto"}}>{data.name}</h1>
    <div id='singlepagehealth'>
        <div id='singlepagefirst'>
            <img src={data.image} alt="" />
        </div>
        <div id='singlepagesecond'>
            <div id='secondfirst'>
                <div className="icon-container">
                    <TbTestPipe size={50}  className="icon" color={"#E349C2"} />
                </div>
                <div className="icon-container">
                    <ImSmile2 size={50}  className="icon" color={"#E349C2"}/>
                </div>
            </div>
            <div>

            </div>
            <div id='secondthird'>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/catalog-manager/catalog-item/images/USP_IMAGE_1_1639561567285.png" alt="" />
                    <p>Free consultations with top doctors</p>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/catalog-manager/catalog-item/images/USP_IMAGE_2_1639561578751.png" alt="" />
                   <p>Sample pickup at home</p>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/catalog-manager/catalog-item/images/USP_IMAGE_3_1639561594911.png" alt="" />
                    <p>Online report within 48 hours</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
