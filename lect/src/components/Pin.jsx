import React from 'react'
import PropTypes from "prop-types"
import { useState } from 'react'
import { useRef } from 'react'
import PinItem from './PinItem'
import "./pin.css"

const Pin = ({length,setOtpHandler}) => {

const [inputBoxLen]=useState(new Array(length).fill(1))
const [inputBoxValue,setInputBoxValue]=useState(new Array(length).fill(""))
const inputRef=useRef([])

console.log(inputRef.current)
console.log(inputBoxValue)


//moving one step forward

const handleChange=(e,index)=>{

inputBoxValue[index]=e.target.value
setInputBoxValue(inputBoxValue)
if(e.target.value.length>0 && index<length-1){
 inputRef.current[index+1].focus();
    }
setOtpHandler(inputBoxValue.join(""))
}

//handling backspace

const onBackSpaceHandler=(e,index)=>{
     if(index > 0){

        inputRef.current[index-1].focus();
    }
    inputBoxValue[index]=e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""))
}


//pasting otp

const handlePaste=(e)=>{
  e.preventDefault()
  console.log(e)
    console.log(e.clipboardData.getData("text"));
    const data=e.clipboardData.getData("text").split("")
    .filter((item,index)=>index<length)

    console.log(data)

    data.forEach((value,index)=>{
        inputBoxValue[index]=value 
        console.log(inputRef.current[index].value)
        inputRef.current[index].value=value;
       
        if(index<length-1){
            inputRef.current[index+1].focus();
        }
    })
}



  return (
    <div onPaste={handlePaste}>
        {inputBoxLen.map((item,index)=>(
         <PinItem 
         key={index}

         changeHandler={(e)=>handleChange(e,index)}

         ref={(element)=>{
             console.log(element)
            inputRef.current[index]=element
          }}

          onBackSpaceHandler={(e)=>onBackSpaceHandler(e,index)}
         />
        ))}
    </div>
  )
}

Pin.propTypes={
    length:PropTypes.number.isRequired,
    onChange:PropTypes.func,
}

export default Pin