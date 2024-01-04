"use client"
import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
    useEffect(()=>{
console.error(error)
    },[error])
  return (
    <div>
        <h2>Went Some thing wrong</h2>
        <button onClick={()=>reset()}>
Try Again
        </button>
    </div>
  )
}

export default Error