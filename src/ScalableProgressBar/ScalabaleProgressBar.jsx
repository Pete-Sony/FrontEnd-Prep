import React from 'react';
import ProgressBar from './ProgressBar';
import {useEffect, useState} from 'react'
export default function ScalableProgressBar() {

      const [value,setValue] = useState(0)
       useEffect(() => {
        setInterval(()=>{
    
          setValue((val)=> val + 1)
        },100)
       },[])
    
    
    
      return (
        <>
            <span> Progress Bar</span>
            <ProgressBar value={value}/>
        </>


    
    
  );
}