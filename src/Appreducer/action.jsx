import { faildata, getdata, reqdata } from "./actiontype"


let Getdata=()=>{
    return {
        type:getdata,
        
    }
}

let Faildata=()=>{
    return{
        type:faildata,
       
    }
}
let Reqdata=()=>{
    return{
        type:reqdata,

    }
}

export {Getdata,Faildata,Reqdata}