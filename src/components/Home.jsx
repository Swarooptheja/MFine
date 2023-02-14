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
                <img src="data:image/jpeg;base64,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" alt="" />
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