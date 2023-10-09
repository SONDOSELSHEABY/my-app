import React from 'react'

interface props { 
    children: string ;
}
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: 'users',
    default: 'users',
    absolute: 'users',
  },
}
const layoutUsers = ({children}:props) => {
  return (
    <> 
    
   <h6> USERS </h6>
   <ul  style={{
    backgroundColor:"gray",
    padding:"15px",
    justifyContent:"center",    
    margin:"auto",
   }}>{children}</ul>
   </>
  )
}

export default layoutUsers