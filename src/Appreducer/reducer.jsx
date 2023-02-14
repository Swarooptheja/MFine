import { faildata, getdata, reqdata } from "./actiontype"


let initdata={
    healthcheckdata:[
        {
            image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman%20Advanced%20Health%20Check_Jan23.png",
        name:"Ayushman Advanced Health Check",
        Mrp:6236,
        price:2499
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman%20Basic%20Health%20Check_Jan23.png",
        name:"Ayushman Basic Health",
        Mrp:2499,
        price:999,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman%20Health%20Check_Jan23.png",
        name:"Ayushman complete health check",
        Mrp:4999,
        price:1999,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman%20Vital%20Health%20Check_Jan23.png",
        name:"Ayushman vital health check",
        Mrp:3749,
        price:1499,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman_CHC_Men_Jan23.png",
        name:"Ayushman comprehensive health check",
        Mrp:9999,
        price:3999,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Ayushman_CHC_Women_Jan23.png",
        name:"Ayushman comprehensive health check female",
        Mrp:12499,
        price:4999,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Taxsaver_Men_jan23.png",
        name:"Ayushman Taxsaver health check female",
        Mrp:13567,
        price:5698,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Taxsaver_Women_Jan23.png",
        name:"Ayushman Taxsaver health check male",
        Mrp:12599,
        price:5682,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Vitamin-20190619.jpg",
        name:"Vitamin profile",
        Mrp:870,
        price:690,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Thyroid-Care-31072019.jpg",
        name:"thyroid profile",
        Mrp:400,
        price:339,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Web_Diabete_Screening.jpg",
        name:"Diabetes screening",
        Mrp:330,
        price:249,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/PCOD-28-02-2020.jpg",
        name:"PCOD test",
        Mrp:1499,
        price:1200,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Liver-Function-Test_08042020.jpg",
        name:"Liver Function test",
        Mrp:570,
        price:499,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Kidney-Function-Test_08042020.jpg",
        name:"Kidney Function test",
        Mrp:400,
        price:300,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Advanced-Thyroid-Care-31072019.jpg",
        name:"Advanced Thyroid care",
        Mrp:569,
        price:450,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Vitamin-D-Test-16082019.jpg",
        name:"Vitamin D test",
        Mrp:1610,
        price:1400,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/HbA1c_08042020.jpg",
        name:"HbAIC",
        Mrp:450,
        price:399,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/WEB_Lipid_Profile.jpg",
        name:"Lipid profile",
        Mrp:499,
        price:300,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/download/SalesPackage/COVID-RTPCR-PLP.jpg",
        name:"COVID RTPCR test",
        Mrp:1075,
        price:790,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Complete-Blood-Count-16082019.jpg",
        name:"Complete blood counter test",
        Mrp:310,
        price:240,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Pregnancy-Test-16082019.jpg",
        name:"Pregnesy test",
        Mrp:800,
        price:600,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Vitamin-B12-Test-16082019.jpg",
        name:"Vitamin B12 test",
        Mrp:570,
        price:450,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/STD-Risk-Assessment-31072019.jpg",
        name:"STD risk assessment",
        Mrp:2230,
        price:2000,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewThree/Covid-Antibody-06072020.jpg",
        name:"Basic covid Antibody test",
        Mrp:700,
        price:500,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewThree/Covid19_Immune-09072020.jpg",
        name:"Covid Immunity Test",
        Mrp:500,
        price:400,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Dengue-Screening-31072019.jpg",
        name:"Dengue test",
        Mrp:2010,
        price:1028,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Cardiac-25092019.jpg",
        name:"Cardiac risk assignment",
        Mrp:1570,
        price:1050,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Obesity-Risk-31072019.jpg",
        name:"Obisity risk",
        Mrp:1500,
        price:1200,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Allergy-Prone-31072019.jpg",
        name:"Allergy Prone",
        Mrp:1322,
        price:799,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/gridViewTwoV2/Smokers-Risk-Assessment.jpg",
        name:"Smoke risk assignment",
        Mrp:1300,
        price:400,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Stress-Assessment-31072019.jpg",
        name:"stress Assignment",
        Mrp:2499,
        price:1399,
    },
    {
        image:"https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=pages/Alcohol-Risk-Assessment-31072019.jpg",
        name:"Alcohol Assignment",
        Mrp:2300,
        price:1230,
    },
    ],
    Loading:false,
    error:false
}

let reducer=(state=initdata,action)=>{
    if(action.type==getdata){
        return{
            ...state,
            initdata:action.payload,
            Loading:false,
            error:false
        }
    }
    if(action.type==faildata){
        return{
            ...state,
            initdata:[],
            Loading:false,
            error:true
        }
    }
    if(action.type==reqdata){
        return{
            ...state,
            initdata:[],
            Loading:true,
            error:false
        }
    }

    return state
}
export {reducer}