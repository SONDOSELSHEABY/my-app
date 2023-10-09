import Link from 'next/link'
import React from 'react'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log(res);
  
  return res.json()
}
 
type User = {
  id: number;
  name:string; 
  body:string;
};

const Users = async () => {
  
   const data = await getData() ;
      
 
  return (
    <> 
    <h1>{data[0].title}</h1>
    {data.map((user:User)=> <li>  <Link href={`/Users/${user.id}`}> {user.name} </Link>  </li> )}
    
    
    </>
  )
}

export default Users