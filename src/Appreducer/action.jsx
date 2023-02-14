import { faildata, getdata, reqdata } from "./actiontype"


let Getdata=(payload)=>{
    return {
        type:getdata,
        payload
    }
}

let Faildata=()=>{
    return{
        type:faildata,
        payload
    }
}
let Reqdata=()=>{
    return{
        type:reqdata,
        payload
    }
}

export {Getdata,Faildata,Reqdata}