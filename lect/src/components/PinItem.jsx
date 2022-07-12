import React from 'react'
import { forwardRef } from 'react'

const PinItem = forwardRef(({changeHandler,onBackSpaceHandler},ref) => {

     const handleKeyUp=(e)=>{

        console.log(e)

        if(e.keyCode===8){
            //backspace
            onBackSpaceHandler(e)
        }
        else{
            changeHandler(e)
        }
     }


  return (
    <input className='input'
  ref={ref}
   
    maxLength={1}
  
    onKeyUp={handleKeyUp}
    />
  )
})

export default PinItem