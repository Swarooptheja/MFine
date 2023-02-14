import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getdata } from '../../Appreducer/action'
import "./Healthcheck.css"
export const Healthcheck = () => {
    let dispatch = useDispatch()

    let healthdata = useSelector((state) => {
        return state.Appreducer.healthcheckdata
    })
    useEffect(() => {

    }, [healthdata])
    let data=JSON.parse(localStorage.getItem("singledata"))||[]
    let handleclck=(el)=>{
        console.log(el)
        localStorage.setItem("singledata",JSON.stringify(el))
    }
    return (
        <>
        <h1 style={{width:"90%",textAlign:"left",margin:"auto"}}>Health Check packages</h1>
        <h2  style={{width:"90%",textAlign:"left",margin:"auto",marginTop:"3rem"}}>Ayushman Health Packages</h2>
            <div id='healthdatacontainer'>
                {
                    healthdata.length > 0 && healthdata.map((el) => {
                        return (
                            <div key={el.name}  onClick={()=>handleclck(el)} >
                                <a href="/healthchecksinglepage" >
                                <img id="keyimage" src={el.image} alt="Image" />
                                <h2>{el.name}</h2>
                                <div id="bottom">
                                    <div>
                                        <h4>₹ {el.Mrp}</h4>
                                    </div>
                                    <div>
                                        <button id='pricebtn'>₹ {el.price}</button>
                                    </div>
                                </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div id='healthdatabottom'>
                <div>

                    <h1 style={{textAlign:"left"}}>Why do I need a health checkup?</h1>
                    <p style={{textAlign:"left"}}>A timely medical checkup helps in ensuring that your health is in track and detect any early signs of medical conditions that may be life-threatening in the long run. Early diagnosis through a full body checkup increases your chances of effective treatment and cure. It also helps in reducing heavy medical expenses in the future.

                    </p>
                </div>
                <div>
                    <h1 style={{textAlign:"left"}}>How often should I get a health checkup?</h1>
                    <p style={{textAlign:"left"}}>In general, it is best to opt for a full body checkup every year after you’ve crossed the age of 30. You can also take up a full body exam if you are currently having a stressful or hectic day-to-day routine and exhibit early symptoms of various lifestyle diseases. A medical checkup will help assess hereditary illnesses and the development of any pre-existing disease.

                    </p>
                </div>
                <div>
                    <h1 style={{textAlign:"left"}}>How do regular health checkups benefit me?</h1>
                    <p style={{textAlign:"left"}}>Apart from the relief that you are in the pink of health, regular full body tests offer the following benefits:

                    </p>

                    <li style={{textAlign:"left"}}>
                        Early diagnosis of diseases: With heart attacks and cancer being a few of the common causes of death in individuals, it is always better to opt for preventive health checkups on an annual basis. Not only will this increase the chances for survival for the individual, but it will also help in reducing the course of treatment.

                    </li>
                    <li style={{textAlign:"left"}}>
                        Subsidized medical costs:  A shorter duration of treatment due to the early diagnosis of a disease will automatically contribute to subsidized medical expenses. A regular health screening will also offer the incomparable benefit of knowing you are in sound health – which is priceless.

                    </li>
                    <li style={{textAlign:"left"}}>
                        Variety of tests included: A health screening or full body checkup includes a variety of blood tests that check for a plethora of diseases. From diabetes, cancer and anemia to high blood pressure and other cardiovascular diseases, you will be checked for all conditions.

                    </li>
                    <li style={{textAlign:"left"}}>
                        Functioning of body organs: A regular health screening or annual doctor checkup also ensures the sound functioning of vital body organs including the heart, lungs, thyroid and liver.

                    </li>
                </div>
                <div>
                    <h1 style={{textAlign:"left"}}>
                        What are the types of health checkups?
                    </h1>
                    <p style={{textAlign:"left"}}>
                        There are a variety of health checkups available as per the symptoms you exhibit and the various lifestyle habits you indulge in. Following are the broad health packages you can opt for:
                    </p>
                    <li style={{textAlign:"left"}}>Full body check: This is the best type of health checkup that can be taken up on an annual basis. You can choose from advanced full body checkup for men, advanced full body checkup for women, a full body check of 50+ tests or a basic full body check of 35 tests.
                    </li>
                    <li style={{textAlign:"left"}}>Conditions health packages: These health packages are best taken when you exhibit early symptoms of common diseases. Conditions health packages also include risk assessments that check if you are at the risk of getting a particular disease. A few of the common condition health packages include thyroid care, diabetes screening, full blood count, and vitamin D test, etc.
                    </li>
                    <li style={{textAlign:"left"}}>Lifestyle health packages: With the rise in hectic work schedules and pollution levels, many individuals are prone to lifestyle diseases that need to be diagnosed immediately for effective treatment. The most common lifestyle health packages include cardiac risk assessment, obesity risk, stress assessment, and alcohol risk assessment, etc.</li>
                </div>
            </div>
        </>
    )
}
