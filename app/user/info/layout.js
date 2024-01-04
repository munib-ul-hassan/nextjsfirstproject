import React from 'react'
// we can define metadata in two ways : static and dynamic for SEO

// static meta data for this we only need to create and export variable with metadata
//input
export const metadata ={
title:"Home"
}
//output
{/* <head>
    <title>Home</title>
    </head>
 */}



//  for dynamic metadata
// export async function generateMetadata({params,searchParams}){
//     const product= await getProduct(params.id)
//     return {title:product.title}
// }



const layout = () => {
  return (
    <div>layout</div>
  )
}

export default layout