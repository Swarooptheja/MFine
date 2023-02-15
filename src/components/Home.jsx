import React from 'react'
import SimpleSlider from './Carousel';
import DemoCarousel from './Carousel1';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import SimpleSlider from './Carousel1';


import "./Home.css"
import { color } from '@chakra-ui/react';
const Home = () => {
    return (
        <div id='homepagecontainer'>
            <div id='homeheader'>
                <img src="https://www.mfine.co/order/mfine-thumbnail.png" alt="" />
                 </div>
            <div id='homenext'>
                <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2022/09/2700x200-scaled.jpg" alt="" />
            </div>
            <div style={{ width: "70%", margin: "auto" }}>
                <h1 style={{ textAlign: "left" }}>What would you like to do today</h1>
            </div>
           <div id='main'>

            <div id='homenext1'>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h1 style={{ textAlign: "left" }}>Consult <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                           <br/>
                        </h1>
                        
                        <h3 style={{ textAlign: "left" }}>Doctor Online</h3>
                    </div>
                    <div>
                        <div className='mainimg'>

                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/h_d_rsz_conssult2x.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h1 style={{ textAlign: "left" }}> Book Lab Test <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                            <br />
                        </h1>
                        <h3 style={{ textAlign: "left",color:"red" }}>Upto 50% Off</h3>
                        
                    </div>
                    <div>
                        <div  className='mainimg'>

                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/h_d_rsz_lab_test2x.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id='homenext2'>
                <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/radiology-2700x200.jpg" alt="" />
            </div>
           </div>
           <div id='homenext3'>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h3 style={{ textAlign: "left" }}>Care Programs <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                           <br/>
                        </h3>
                        
                        <h3 style={{ textAlign: "left",color:"#8882c8" }}>Diabetes, Thyroid & more</h3>
                    </div>
                    <div>
                        <div className='mainimg'>
                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/home-care-plans.png" alt="" />
                               </div>
                    </div>
                </div>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h3 style={{ textAlign: "left" }}> Book X-Rays & Scans <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                            <br />
                        </h3>
                        <h3 style={{ textAlign: "left",color:"#8882c8" }}>CT Scan & more</h3>
                        
                    </div>
                    <div>
                        <div  className='mainimg'>

                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/med-order-online.png" alt="" /> </div>
                    </div>
                </div>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h3 style={{ textAlign: "left" }}>Order medicines <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                           <br/>
                        </h3>
                        
                        <h3 style={{ textAlign: "left",color: "#8882c8",}}>Same day Delivery</h3>
                    </div>
                    <div>
                        <div className='mainimg'>

                           <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/xray-mri-scan.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id='homenext2'>
                <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/Desktop_Web.jpg" alt="" />
            </div>

            <div id='homenext1'>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h2 style={{ textAlign: "left" }}>Health and wellness Blogs <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                           <br/>
                        </h2>
                        
                        <h3 style={{ textAlign: "left", color:"orangered" }}>Get the latest healthcare updates</h3>
                    </div>
                    <div>
                        <div className='mainimg'>

                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/self-checks-new.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ width: "80%", margin: "auto" }}>
                        <h2 style={{ textAlign: "left" }}>Start Self Check <BsFillArrowRightCircleFill size={30} color={"orange"}/>
                            <br />
                        </h2>
                        <h3 style={{ textAlign: "left",color:"olive" }}>Know Your risk levels</h3>
                        
                    </div>
                    <div>
                        <div  className='mainimg'>

                            <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/surgical-care.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
            <div id='homepagematter'>
                <div>
                    <h1 style={{ textAlign: "left" }}>Consult Specialists Online
                        <br />
                        <span>30+ Specialities</span>
                    </h1>
                </div>
                <div>
                    <button id='seemorebtn'>See More</button>
                </div>
            </div >
            <div id='homepagespe'>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/01Physician.jpeg" alt="" />
                    <h2>Physician</h2>
                </div>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/02Womens-Health.jpeg" alt="" />
                    <h2>Gynaecologist</h2>
                </div>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/03Skin-Hair-Specialist.jpeg" alt="" />
                    <h2>Skin & hair Specialist</h2>
                </div>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/Pediatrician.jpg" alt="" />
                    <h2>Children's Specialist</h2>
                </div>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/05Orthopedician.jpeg" alt="" />
                    <h2>
                        Orthopedician
                    </h2>
                </div>
                <div>
                    <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2018/07/08Dietitian.jpeg" alt="" />
                    <h2>
                        Dietitian
                    </h2>
                </div>
            </div>

            <div id='homepagematter'>
                <div>
                    <h1 style={{ textAlign: "left", marginTop: "3rem" }}>Common Symptoms
                    </h1>
                </div>
                <div>
                    <button id='seemorebtn'>Search</button>
                </div>
            </div >

            <div id='carousel'>
                <SimpleSlider />
            </div>
            <div id='health'>

                <h1 >Health Checks & Lab Tests</h1>
            </div>
            <div id='healthcheck'>
                <div id='healthfirst'>
                    <div>
                        <h2 className='test'>66+ Tests</h2>
                    </div>
                    <div>
                        <h3 style={{ textAlign: "left" }}>Ayushman
                            <br />
                            <span>basic health check</span>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h3 className="mrp_price">₹2499</h3>
                        <h3 className='slprice'>₹999</h3>
                    </div>
                </div>
                <div id='healthfirst'>
                    <div>
                        <h2 className='test'>86+ Tests</h2>
                    </div>
                    <div>
                        <h3 style={{ textAlign: "left" }}>Ayushman

                            <br />
                            <span>Advance Health Check</span>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h3 className="mrp_price">₹6249</h3>
                        <h3 className='slprice'>₹2499</h3>
                    </div>
                </div>
                <div id='healthfirst'>
                    <div>
                        <h2 className='test'>99+ Tests</h2>
                    </div>
                    <div>
                        <h3 style={{ textAlign: "left" }}>Ayushman

                            <br />
                            <span>Comprehensive Health Check</span>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h3 className="mrp_price">₹9999</h3>
                        <h3 className='slprice'>₹3999</h3>
                    </div>
                </div>
                <div id='healthfirst'>
                    <div>
                        <h2 className='test'>97+ Tests</h2>
                    </div>
                    <div>
                        <h3 style={{ textAlign: "left" }}>Ayushman

                            <br />
                            <span>Taxsaver Health Package</span>
                        </h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h3 className="mrp_price">₹12499</h3>
                        <h3 className='slprice'>₹4999</h3>
                    </div>
                </div>
            </div>

            <div id='healthcheck2'>
                <div id='healthsecond'>
                    <div>

                        <div>
                            <h2 className='test'>2+ Tests</h2>
                        </div>
                        <div>
                            <h3 style={{ textAlign: "left" }}>Diabetes Screening
                            </h3>
                        </div>

                    </div>
                    <div>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/h_r_Diabetes%20Screening@2x-min.png" alt="" />
                    </div>
                </div>
                <div id='healthsecond'>
                    <div>

                        <div>
                            <h2 className='test'>3+ Tests</h2>
                        </div>
                        <div>
                            <h3 style={{ textAlign: "left" }}>Thyroid Care Profile
                            </h3>
                        </div>

                    </div>
                    <div>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/h_r_Thyroid%20Care@2x-min.png" alt="" />
                    </div>
                </div>
                <div id='healthsecond' style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                    <h2 style={{ color: "orchid" }}>See More Tests</h2>
                </div>
            </div>



            {/* selfcheck */}
            <div style={{ width: "80%", margin: "auto" }}>
                <h1 style={{ textAlign: "left" }}>Start a Self-Check
                    <br />
                </h1>
                <h3 style={{ textAlign: "left" }}>Answer a few questions. Know your health risks.</h3>
            </div>
            <div id='selfcheck'>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-self-check-Migraine_2.png" alt="" />
                    <h2>Migraine</h2>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Diabetes@2x-min.png" alt="" />
                    <h2>Diabetes</h2>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Thyroid@2x-min.png" alt="" />
                    <h2>Thyroid</h2>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-Heart-Health@2x-min.png" alt="" />
                    <h2>Heart Health</h2>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/mfine-selfcheck-COVID@2x-min.png" alt="" />
                    <h2>
                        COVID-19
                    </h2>
                </div>

            </div>


            {/* health */}
            <div id='homepagematter'>
                <div>
                    <h1 style={{ textAlign: "left", marginTop: "3rem" }}>Your Health Feed
                    </h1>
                </div>
                <div>
                    <button id='seemorebtn'>See More</button>
                </div>
            </div >
            <div id='healthcare'>

                <DemoCarousel />
            </div>

            {/* Testimonials */}

            <div style={{ width: "80%", margin: "auto" }}>
                <h1 style={{ textAlign: "left", marginTop: "3rem" }}>Testimonials
                </h1>
            </div>
            <div id='Testimonials'>
                <div>
                    <h3>
                        I got lab tests done for my parents on MFine since we couldn’t travel. Sample was
                        collected at home &amp; I got both reports on the app. Very convenient.
                    </h3>
                    <h4>
                        Vidhyadar M
                    </h4>

                </div>
                <div>
                    <h3>
                        This app is really flawless. Good for elderly people. Best part of the app is home
                        delivery of medicine at a discounted price.
                    </h3>
                    <h4>
                        Harshit Shukla
                    </h4>

                </div>
                <div>
                    <h3>
                        My 3 y/o son was unwell late at night and I had to speak to a doctor immediately. I chose
                        a doctor and got to consult in 10 minutes. It was very helpful for us.
                    </h3>
                    <h4>
                        Renuka
                    </h4>

                </div>

            </div>


            {/* notsure for consult */}

            <div style={{ width: "80%", margin: "auto" }}>
                <h1 style={{ textAlign: "left" }}>Not sure which doctor to consult?
                    <br />
                </h1>
                <h3 style={{ textAlign: "left" }}>Know more details on specialities</h3>

            </div>
            <div id='notsure'>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/physician.svg" alt="" />
                    <h3>Physician</h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/gynaecologist.svg" alt="" />
                    <h3>Gynaecologist</h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/pediatrician.svg" alt="" />
                    <h3>Pediatrician</h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/orthopedician.svg" alt="" />
                    <h3>Orthopedician</h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/eye-specialist.svg" alt="" />
                    <h3>
                        eye
                    </h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/physiotherapist.svg" alt="" />
                    <h3>
                        physiotherapist
                    </h3>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/dentist.svg" alt="" />
                    <h2>
                        Dietitian
                    </h2>
                </div>
                <div>
                    <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/more.svg" alt="" />
                    <h2>
                        Dietitian
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Home