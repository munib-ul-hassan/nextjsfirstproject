"use client"
import React, { useEffect } from 'react'
const page = async({params}) => {

  // there is three methods of data fetching
  // SSR(Server Side rendering)
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`,{cache:"no-store"})
  // SSR (Static Side Generating)
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
  // ISR (Incremental Static Generation)
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`,{next:{revalidate:10}})



  console.log(params)
  const { userId } = params;
  
  useEffect(() => {
    // You can use the userId in your component logic or make API calls here
    console.log('User ID:', userId);
  }, [userId]);

  return (
    <div>{userId}</div>
  )
}

export default page